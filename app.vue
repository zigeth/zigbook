<script setup lang="ts">
import { computed, ref } from 'vue'
import type { PageCollections } from '@nuxt/content'
import * as nuxtUiLocales from '@nuxt/ui/locale'

const appConfig = useAppConfig()
const { seo } = appConfig
const site = useSiteConfig()
const { locale, locales, isEnabled, switchLocalePath } = useDocusI18n()
const route = useRoute()

const lang = computed(() => nuxtUiLocales[locale.value as keyof typeof nuxtUiLocales]?.code || 'en')
const dir = computed(() => nuxtUiLocales[locale.value as keyof typeof nuxtUiLocales]?.dir || 'ltr')
const collectionName = computed(() => (isEnabled.value ? `docs_${locale.value}` : 'docs'))

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang,
    dir
  }
})

useSeoMeta({
  titleTemplate: seo.titleTemplate,
  title: seo.title,
  description: seo.description,
  ogSiteName: site.name,
  twitterCard: 'summary_large_image'
})

if (isEnabled.value) {
  const defaultLocale = useRuntimeConfig().public.i18n.defaultLocale!
  onMounted(() => {
    const currentLocale = route.path.split('/')[1]
    if (!locales.some(localeEntry => localeEntry.code === currentLocale)) {
      void navigateTo(switchLocalePath(defaultLocale) as string)
    }
  })
}

const { data: navigation } = await useAsyncData(
  () => `navigation_${collectionName.value}`,
  () => queryCollectionNavigation(collectionName.value as keyof PageCollections),
  {
    transform: (data) => {
      const rootResult = data.find(item => item.path === '/docs')?.children || data || []
      return rootResult.find(item => item.path === `/${locale.value}`)?.children || rootResult
    },
    watch: [locale]
  }
)

const { data: files } = useLazyAsyncData(
  () => `search_${collectionName.value}`,
  () => queryCollectionSearchSections(collectionName.value as keyof PageCollections),
  {
    server: false
  }
)

provide('navigation', navigation)

const pageTransition = {
  name: 'page-fade',
  mode: 'out-in',
  appear: true
} as const

type AccentDensity = 'off' | 'low' | 'medium' | 'high'

const accentDensity = computed<AccentDensity>(() => {
  const config = appConfig.ui?.accents
  if (!config) {
    return 'off'
  }

  const defaultDensity = config.default as AccentDensity | undefined
  const routes = config.routes as Record<string, AccentDensity> | undefined

  if (!routes) {
    return defaultDensity ?? 'off'
  }

  const currentPath = route.path
  let matchedKey: string | undefined

  for (const key of Object.keys(routes)) {
    if (currentPath.startsWith(key)) {
      if (!matchedKey || key.length > matchedKey.length) {
        matchedKey = key
      }
    }
  }

  return (matchedKey ? routes[matchedKey] : defaultDensity) ?? 'off'
})

const isPageTransitioning = ref(false)

const handleBeforeLeave = () => {
  isPageTransitioning.value = true
}

const handleBeforeEnter = () => {
  isPageTransitioning.value = true
}

const handleAfterEnter = () => {
  isPageTransitioning.value = false
}
</script>

<template>
  <UApp :locale="nuxtUiLocales[locale as keyof typeof nuxtUiLocales]">
    <NuxtLoadingIndicator color="var(--ui-primary)" />

    <AccentLayer :density="accentDensity" :transitioning="isPageTransitioning" />

    <AppHeader v-if="$route.meta.header !== false" />

    <NuxtLayout>
      <Transition
        v-bind="pageTransition"
        @before-leave="handleBeforeLeave"
        @before-enter="handleBeforeEnter"
        @after-enter="handleAfterEnter"
      >
        <!-- eslint-disable-next-line vue/require-toggle-inside-transition -->
        <div :key="$route.fullPath" class="min-h-screen">
          <NuxtPage />
        </div>
      </Transition>
    </NuxtLayout>

    <AppFooter v-if="$route.meta.footer !== false" />

    <ClientOnly>
      <LazyUContentSearch :files="files" :navigation="navigation" />
    </ClientOnly>
  </UApp>
</template>

<style>
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 220ms ease, transform 260ms ease;
}

.page-fade-enter-from,
.page-fade-leave-to {
  opacity: 0;
  transform: translate3d(0, 12px, 0);
}

@media (prefers-reduced-motion: reduce) {
  .page-fade-enter-active,
  .page-fade-leave-active {
    transition: none;
  }

  .page-fade-enter-from,
  .page-fade-leave-to {
    transform: none;
  }
}
</style>
