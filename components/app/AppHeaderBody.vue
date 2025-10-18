<script setup lang="ts">
const heroStats = [
  {
    label: 'Standard library modules',
    value: '140+',
    description: 'Curated Zig 0.15.1 references with deep linking.',
    icon: 'i-lucide-folders'
  },
  {
    label: 'LLM context feeds',
    value: '2 exports',
    description: 'llms.txt and llms-full.txt kept in sync for copilots.',
    icon: 'i-lucide-bot'
  },
  {
    label: 'Sync cadence',
    value: 'Weekly',
    description: 'Automated upstream pulls with manual QA gates.',
    icon: 'i-lucide-rotate-cw'
  }
] as const

const heroHighlights = [
  { icon: 'i-lucide-compass', text: 'Deep dives into collections, systems, crypto, and more.' },
  { icon: 'i-lucide-flame', text: 'Allocator patterns and runtime guidance lifted from real workloads.' },
  { icon: 'i-lucide-sparkle', text: 'Ready-to-ingest LLM artifacts for internal tooling.' }
]
</script>

<template>
  <section class="space-y-8 px-1 py-6">
    <article class="surface-card relative overflow-hidden p-8 sm:p-10">
      <span class="pointer-events-none absolute -top-32 left-4 h-56 w-56 rounded-full bg-gradient-to-br from-emerald-400/30 via-cyan-400/20 to-transparent blur-3xl" aria-hidden="true" />
      <span class="pointer-events-none absolute -bottom-40 right-0 h-64 w-64 rounded-full bg-gradient-to-tr from-sky-500/15 via-emerald-400/18 to-transparent blur-[130px]" aria-hidden="true" />

      <div class="relative grid gap-10 xl:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
        <div class="space-y-6">
          <div class="badge-pill">
            <span class="i-lucide-rocket size-4" aria-hidden="true" />
            Zig 0.15.1 aligned
          </div>

          <div class="space-y-4">
            <h1 class="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
              The modern home for the <span class="spark-underline">Zig standard library</span>.
            </h1>
            <p class="max-w-2xl text-base text-slate-600 dark:text-slate-300 sm:text-lg">
              Zigbook curates upstream markdown, enriches it with navigation, and packages the output for both humans and AI copilots. Navigate modules, understand allocator etiquette, and keep your assistants grounded in verified context.
            </p>
          </div>

          <div class="flex flex-wrap gap-3">
            <UButton
              to="/docs/std/"
              size="md"
              color="primary"
              icon="i-lucide-compass"
            >
              Explore documentation
            </UButton>
            <UButton
              to="/docs/ops/baseline"
              size="md"
              variant="ghost"
              color="neutral"
              icon="i-lucide-database"
            >
              Operations runbook
            </UButton>
          </div>

          <ul class="flex flex-col gap-3 text-sm text-slate-500 dark:text-slate-400 sm:flex-row sm:flex-wrap">
            <li
              v-for="highlight in heroHighlights"
              :key="highlight.text"
              class="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 font-medium text-emerald-700 dark:border-emerald-400/30 dark:bg-emerald-400/10 dark:text-emerald-200"
            >
              <span :class="[highlight.icon, 'size-4']" aria-hidden="true" />
              <span>{{ highlight.text }}</span>
            </li>
          </ul>
        </div>

        <aside class="space-y-4 rounded-3xl border border-emerald-400/10 bg-white/50 p-6 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/40">
          <h2 class="text-sm font-semibold uppercase tracking-[0.32em] text-emerald-500">Why teams choose Zigbook</h2>
          <ul class="space-y-4">
            <li
              v-for="stat in heroStats"
              :key="stat.label"
              class="rounded-2xl border border-white/40 bg-white/60 p-4 shadow-sm transition hover:border-emerald-400/30 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
            >
              <div class="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-500">
                <span :class="[stat.icon, 'size-4']" aria-hidden="true" />
                {{ stat.label }}
              </div>
              <p class="mt-2 text-2xl font-semibold text-slate-900 dark:text-slate-50">{{ stat.value }}</p>
              <p class="mt-1 text-sm text-slate-600 dark:text-slate-300">{{ stat.description }}</p>
            </li>
          </ul>
        </aside>
      </div>
    </article>

    <div class="surface-card--muted border border-transparent px-5 py-6 sm:px-8 sm:py-8">
      <ReferenceNavigation dense />
    </div>
  </section>
</template>
