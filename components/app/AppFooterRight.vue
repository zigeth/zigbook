<script setup lang="ts">
const appConfig = useAppConfig()

const links = computed(() => {
  const socials = Object.entries(appConfig.socials || {}) as Array<[string, string]>

  return [
    ...socials.map(([key, url]) => ({
      icon: `i-simple-icons-${key}`,
      to: String(url),
      target: '_blank' as const,
      'aria-label': `${key} social link`
    })),
    appConfig.github && appConfig.github.url && {
      icon: 'i-simple-icons-github',
      to: String(appConfig.github.url),
      target: '_blank' as const,
      'aria-label': 'GitHub repository'
    }
  ].filter(Boolean)
})
</script>

<template>
  <div class="flex items-center gap-3">
    <div
      v-if="links.length"
      class="surface-card--muted flex items-center gap-2 rounded-full px-3 py-2"
    >
      <UButton
        v-for="(link, index) in links"
        :key="index"
        size="sm"
        variant="ghost"
        color="neutral"
        class="text-slate-600 transition hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-300"
        v-bind="link"
      />
    </div>
    <UColorModeButton
      size="sm"
      color="neutral"
      variant="ghost"
      class="surface-card--muted px-3 py-2 text-slate-600 transition hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-300"
    />
  </div>
</template>
