<script setup lang="ts">
const headerHighlights = [
  'Authoritative Zig 0.15.1 references',
  'LLM-ready exports maintained weekly'
]
</script>

<template>
  <div class="space-y-5 px-2 py-4">
    <div class="surface-card--muted flex flex-wrap items-center justify-between gap-4 px-5 py-4">
      <div class="flex items-center gap-3">
        <span class="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/15 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-200">
          <span class="i-lucide-compass size-5" aria-hidden="true" />
        </span>
        <div>
          <p class="text-sm font-semibold text-slate-900 dark:text-slate-100">Zigbook Docs Hub</p>
          <p class="text-xs text-slate-500 dark:text-slate-400">Browse modules, sync reference exports, or jump into operations tooling.</p>
        </div>
      </div>

      <div class="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
        <span
          v-for="highlight in headerHighlights"
          :key="highlight"
          class="inline-flex items-center gap-1 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 font-semibold uppercase tracking-[0.18em] text-emerald-600 dark:border-emerald-400/30 dark:bg-emerald-400/10 dark:text-emerald-200"
        >
          <span class="i-lucide-sparkles text-xs" aria-hidden="true" />
          {{ highlight }}
        </span>
      </div>
    </div>

    <div class="surface-card--muted px-4 py-5 sm:px-5">
      <ReferenceNavigation dense />
    </div>
  </div>
</template>
