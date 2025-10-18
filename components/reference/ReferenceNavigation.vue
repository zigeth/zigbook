<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import navigationSource from '~/data/std-navigation.json'

interface NavigationModule {
  key: string
  title: string
  navTitle: string
  slug: string
  description: string
  path: string
  source: string
  lastUpdated: string
}

interface NavigationCategory {
  key: string
  label: string
  navTitle: string
  badge: string
  icon: string
  description: string
  path: string
  modules: NavigationModule[]
}

const props = defineProps<{ dense?: boolean }>()

const route = useRoute()

const normalizePath = (value: string) => {
  if (!value) return '/'
  const trimmed = value.replace(/\/+$/, '')
  return trimmed.length ? trimmed : '/'
}

const baseLinks = [
  { label: 'Zigbook Home', to: '/', icon: 'i-lucide-home' },
  { label: 'Standard Library Overview', to: '/docs/std/', icon: 'i-lucide-library' },
  { label: 'Ai Assistant', to: '/docs/std/ai', icon: 'i-lucide-sparkles' }
]

const categories = computed<NavigationCategory[]>(() => {
  return navigationSource.map((category) => ({
    ...category,
    path: category.path.endsWith('/') ? category.path : `${category.path}/`,
    modules: [...category.modules].sort((a, b) => a.navTitle.localeCompare(b.navTitle))
  }))
})

const normalizedRoute = computed(() => normalizePath(route.path))
const openCategories = ref<string[]>([])

watch(
  normalizedRoute,
  (value) => {
    for (const category of categories.value) {
      if (value.startsWith(normalizePath(category.path))) {
        if (!openCategories.value.includes(category.key)) {
          openCategories.value.push(category.key)
        }
      }
    }
  },
  { immediate: true }
)

const isLinkActive = (to: string) => normalizedRoute.value === normalizePath(to)
const isCategoryActive = (categoryPath: string) => normalizedRoute.value.startsWith(normalizePath(categoryPath))
const isModuleActive = (modulePath: string) => normalizedRoute.value === normalizePath(modulePath)
const isExpanded = (categoryKey: string, categoryPath: string) => openCategories.value.includes(categoryKey) || isCategoryActive(categoryPath)

const toggleCategory = (key: string) => {
  if (openCategories.value.includes(key)) {
    openCategories.value = openCategories.value.filter((current) => current !== key)
  }
  else {
    openCategories.value.push(key)
  }
}

const containerSpacing = computed(() => (props.dense ? 'space-y-4' : 'space-y-6'))
</script>

<template>
  <nav :class="['flex flex-col', containerSpacing]">
    <section>
      <p class="text-xs font-semibold uppercase tracking-[0.32em] text-neutral-500 dark:text-neutral-400">
        Reference
      </p>
      <ul class="mt-3 space-y-1">
        <li v-for="link in baseLinks" :key="link.to">
          <NuxtLink
            :to="link.to"
            :class="[
              'group flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
              isLinkActive(link.to)
                ? 'bg-emerald-500/15 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-300'
                : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-900/5 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-white/10'
            ]"
          >
            <UIcon :name="link.icon" class="size-4" />
            <span>{{ link.label }}</span>
          </NuxtLink>
        </li>
      </ul>
    </section>

    <section>
      <p class="text-xs font-semibold uppercase tracking-[0.32em] text-neutral-500 dark:text-neutral-400">
        Standard Library
      </p>
      <ul class="mt-3 space-y-2">
        <li v-for="category in categories" :key="category.key">
          <div class="rounded-lg border border-transparent">
            <div class="flex items-center gap-2">
              <NuxtLink
                :to="category.path"
                :class="[
                  'group flex flex-1 items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition-colors',
                  isLinkActive(category.path)
                    ? 'bg-emerald-500/15 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-300'
                    : isCategoryActive(category.path)
                      ? 'text-emerald-600 dark:text-emerald-300'
                      : 'text-neutral-700 hover:text-neutral-900 hover:bg-neutral-900/5 dark:text-neutral-200 dark:hover:text-white dark:hover:bg-white/10'
                ]"
              >
                <UIcon :name="category.icon" class="size-4" />
                <span>{{ category.navTitle }}</span>
              </NuxtLink>

              <button
                type="button"
                class="flex h-8 w-8 items-center justify-center rounded-md text-neutral-500 transition hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                :aria-expanded="isExpanded(category.key, category.path)"
                @click="toggleCategory(category.key)"
              >
                <UIcon
                  :name="isExpanded(category.key, category.path) ? 'i-lucide-chevron-up' : 'i-lucide-chevron-down'"
                  class="size-4"
                />
              </button>
            </div>

            <Transition name="fade">
              <ul
                v-if="isExpanded(category.key, category.path)"
                class="mt-2 space-y-1 border-l border-neutral-200/60 pl-4 dark:border-neutral-700/60"
              >
                <li v-for="module in category.modules" :key="module.path">
                  <NuxtLink
                    :to="module.path"
                    :class="[
                      'group flex items-center gap-2 rounded-md px-3 text-sm transition-colors',
                      props.dense ? 'py-1' : 'py-1.5',
                      isModuleActive(module.path)
                        ? 'bg-emerald-500/15 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-300'
                        : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-900/5 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-white/10'
                    ]"
                  >
                    <span class="h-1.5 w-1.5 rounded-full border border-current" />
                    <span>{{ module.navTitle }}</span>
                  </NuxtLink>
                </li>
              </ul>
            </Transition>
          </div>
        </li>
      </ul>
    </section>
  </nav>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.12s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
