<script setup lang="ts">
import categoriesSource from '~/data/std-categories.json' with { type: 'json' }

interface Category {
  key: string
  label: string
  description: string
  icon: string
  badge: string
  modules: string[]
}

const categories = computed<Category[]>(() => categoriesSource.slice(0, categoriesSource.length))
</script>

<template>
  <section class="mx-auto max-w-6xl">
    <header class="mx-auto mb-10 max-w-3xl text-center">
      <p class="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-500">Standard Library</p>
      <h2 class="mt-3 text-3xl font-semibold text-slate-900 dark:text-slate-100">Curated Zig 0.15.1 categories</h2>
      <p class="mt-4 text-base text-slate-600 dark:text-slate-300">
        Instantly reach the right module documentation. Each category stays in sync with the Markdown sources under
        <code>std/</code> so you never chase stale references.
      </p>
    </header>

    <div class="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      <NuxtLink
        v-for="category in categories"
        :key="category.key"
        :to="`/docs/std/${category.key}/`"
        class="group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white/80 p-6 transition hover:-translate-y-1 hover:border-emerald-400/60 hover:shadow-xl dark:border-slate-800/60 dark:bg-slate-900/70"
      >
        <div class="flex items-center gap-3">
          <span class="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/30 bg-emerald-400/10 text-emerald-500 dark:text-emerald-300">
            <span :class="category.icon" class="text-xl" />
          </span>
          <div>
            <p class="text-xs font-semibold uppercase tracking-wide text-emerald-500">{{ category.badge }}</p>
            <h3 class="text-xl font-semibold text-slate-900 dark:text-slate-100">{{ category.label }}</h3>
          </div>
        </div>
        <p class="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{{ category.description }}</p>
        <div class="mt-5 flex flex-wrap gap-2 text-xs text-slate-500 dark:text-slate-400">
          <span
            v-for="module in category.modules.slice(0, 4)"
            :key="module"
            class="rounded-full border border-slate-200/80 bg-slate-100/70 px-3 py-1 dark:border-slate-700 dark:bg-slate-800/70"
          >
            {{ module }}
          </span>
          <span v-if="category.modules.length > 4" class="rounded-full border border-slate-200/80 bg-slate-100/70 px-3 py-1 dark:border-slate-700 dark:bg-slate-800/70">
            +{{ category.modules.length - 4 }} more
          </span>
        </div>
        <span class="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 transition group-hover:gap-3 dark:text-emerald-400">
          Explore docs
          <span class="i-lucide-arrow-right text-base" />
        </span>
        <div class="pointer-events-none absolute inset-x-0 bottom-0 h-1 scale-x-0 transform bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-500 transition-transform duration-200 ease-out group-hover:scale-x-100" />
      </NuxtLink>
    </div>
  </section>
</template>
