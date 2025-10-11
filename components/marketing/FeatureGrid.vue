<script setup lang="ts">
const features = [
  {
    title: 'Document-driven routing',
    description:
      'Nuxt Content powers automatic navigation, search-ready metadata, and multi-level sidebars without manual routing.',
    icon: 'i-lucide-map'
  },
  {
    title: 'Tailwind-powered theming',
    description:
      'A custom Tailwind palette, typography presets, and prose enhancements keep long-form docs legible day and night.',
    icon: 'i-lucide-droplets'
  },
  {
    title: 'SEO + social automation',
    description:
      'Sitemaps, robots, Schema.org, and OG image generation are wired up from first boot for docs that rank and share well.',
    icon: 'i-lucide-rocket'
  },
  {
    title: 'LLM-friendly exports',
    description:
      'nuxt-llms continuously emits fresh llms.txt docs so internal copilots stay grounded in the latest Zig content.',
    icon: 'i-lucide-bot'
  },
  {
    title: 'Production-grade linting',
    description:
      'Nuxt ESLint flat configs, TypeScript strictness, and Vue TSC keep contributions safe and reviewable.',
    icon: 'i-lucide-shield'
  },
  {
    title: 'Composable Vue enhancements',
    description:
      'Drop Vue components directly inside Markdown via MDC to teach with demos, API toggles, and live playgrounds.',
    icon: 'i-lucide-component'
  }
]
</script>

<template>
  <section class="mx-auto max-w-5xl">
    <header class="mx-auto mb-12 max-w-2xl text-center">
      <p class="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500">Why Zigbook</p>
      <h2 class="mt-3 text-3xl font-semibold text-slate-900 dark:text-slate-100">Designed for compiler engineers and doc bots alike</h2>
      <p class="mt-4 text-base text-slate-600 dark:text-slate-300">
        We give your Zig team a turnkey documentation stack—from typography to LLM integrations—so you can stay focused on
        shipping systems code.
      </p>
    </header>

    <div class="grid gap-6 md:grid-cols-2">
      <article
        v-for="feature in features"
        :key="feature.title"
        class="group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white/70 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800/60 dark:bg-slate-900/60"
      >
        <div class="flex h-12 w-12 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-400/10 text-emerald-500 dark:text-emerald-300">
          <span :class="feature.icon" class="text-xl" />
        </div>
        <h3 class="mt-5 text-xl font-semibold text-slate-900 dark:text-slate-100">{{ feature.title }}</h3>
        <p class="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{{ feature.description }}</p>
        <div class="absolute inset-x-0 bottom-0 h-1 scale-x-0 transform bg-gradient-to-r from-emerald-400 to-cyan-400 transition-transform duration-200 ease-out group-hover:scale-x-100" />
      </article>
    </div>
  </section>
</template>
