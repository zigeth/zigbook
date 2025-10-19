<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <div class="surface-card--muted flex items-center gap-3 rounded-2xl px-5 py-4 text-sm text-slate-600 dark:text-slate-300">
    <span class="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/15 text-emerald-500 dark:bg-emerald-400/10 dark:text-emerald-200">
      <span class="i-lucide-layers text-lg" aria-hidden="true" />
    </span>
    <div class="space-y-1">
      <p class="text-sm font-semibold text-slate-900 dark:text-slate-100">Zigbook Documentation</p>
      <p class="text-xs text-slate-500 dark:text-slate-400">
        © {{ currentYear }} zigeth. Crafted with Zig 0.15.1 insights and Nuxt.
      </p>
    </div>
  </div>
</template>
