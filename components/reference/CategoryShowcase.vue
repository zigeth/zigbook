<script setup lang="ts">
import { computed, onMounted, ref, shallowRef, watch } from 'vue'
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
  description: string
  icon: string
  badge: string
  path: string
  weight?: number
  modules: NavigationModule[]
}

interface ShowcaseCategory extends NavigationCategory {
  moduleCount: number
  highlightedModules: NavigationModule[]
  matchingCount: number
  weight: number
}

type FuseSearchItem = {
  categoryKey: string
  categoryLabel: string
  module: NavigationModule
}

const navigationCategories = navigationSource as Array<NavigationCategory & { weight?: number }>

const searchQuery = ref('')
const searchReady = ref(false)

const weightedCategories = computed<ShowcaseCategory[]>(() => {
  return navigationCategories
    .map((category) => {
      const modules = [...category.modules].sort((a, b) => a.navTitle.localeCompare(b.navTitle))
      const weight = typeof category.weight === 'number' ? category.weight : 1
      return {
        ...category,
        weight,
        modules,
        moduleCount: modules.length,
        highlightedModules: modules.slice(0, 5),
        matchingCount: modules.length
      }
    })
    .sort((a, b) => {
      if (a.weight !== b.weight) {
        return b.weight - a.weight
      }
      return a.label.localeCompare(b.label)
    })
})

const normalizedQuery = computed(() => searchQuery.value.trim().toLowerCase())
const isSearching = computed(() => normalizedQuery.value.length > 0)
const canClearSearch = computed(() => searchQuery.value.length > 0)

const fuseInstance = shallowRef<import('fuse.js').default<FuseSearchItem> | null>(null)

const buildSearchCollection = (categories: ShowcaseCategory[]): FuseSearchItem[] =>
  categories.flatMap((category) =>
    category.modules.map((module) => ({
      categoryKey: category.key,
      categoryLabel: category.label,
      module
    }))
  )

const initializeFuse = async () => {
  const { default: Fuse } = await import('fuse.js')
  fuseInstance.value = new Fuse(buildSearchCollection(weightedCategories.value), {
    keys: [
      { name: 'module.navTitle', weight: 0.6 },
      { name: 'module.description', weight: 0.4 },
      { name: 'categoryLabel', weight: 0.15 }
    ],
    includeScore: true,
    ignoreLocation: true,
    threshold: 0.28
  })
  searchReady.value = true
}

onMounted(() => {
  if (typeof window === 'undefined') {
    return
  }
  void initializeFuse()
})

watch(weightedCategories, (next) => {
  if (fuseInstance.value) {
    fuseInstance.value.setCollection(buildSearchCollection(next))
  }
})

const filteredCategories = computed<ShowcaseCategory[]>(() => {
  if (!normalizedQuery.value) {
    return weightedCategories.value
  }

  if (!searchReady.value || !fuseInstance.value) {
    // Fallback filter before Fuse.js is ready.
    return weightedCategories.value
      .map((category) => {
        const moduleMatches = category.modules.filter((module) => {
          const label = module.navTitle.toLowerCase()
          const description = module.description.toLowerCase()
          return label.includes(normalizedQuery.value) || description.includes(normalizedQuery.value)
        })

        const categoryMatch = category.label.toLowerCase().includes(normalizedQuery.value)
          || category.description.toLowerCase().includes(normalizedQuery.value)

        if (!categoryMatch && moduleMatches.length === 0) {
          return null
        }

        return {
          ...category,
          highlightedModules: moduleMatches.length > 0 ? moduleMatches.slice(0, 5) : category.modules.slice(0, 5),
          matchingCount: moduleMatches.length > 0 ? moduleMatches.length : category.moduleCount
        }
      })
      .filter((category): category is ShowcaseCategory => category !== null)
  }

  const results = fuseInstance.value.search(normalizedQuery.value)

  const matchesByCategory = new Map<string, Map<string, NavigationModule>>()
  for (const result of results) {
    const categoryMatches = matchesByCategory.get(result.item.categoryKey) ?? new Map<string, NavigationModule>()
    if (!categoryMatches.has(result.item.module.slug)) {
      categoryMatches.set(result.item.module.slug, result.item.module)
    }
    matchesByCategory.set(result.item.categoryKey, categoryMatches)
  }

  return weightedCategories.value
    .map((category) => {
      const moduleMatches = matchesByCategory.get(category.key)
        ? Array.from(matchesByCategory.get(category.key)!.values())
        : []
      const categoryMatch = category.label.toLowerCase().includes(normalizedQuery.value)
        || category.description.toLowerCase().includes(normalizedQuery.value)

      if (!categoryMatch && moduleMatches.length === 0) {
        return null
      }

      const highlightedModules = moduleMatches.length > 0
        ? moduleMatches.slice(0, 5)
        : category.modules.slice(0, 5)

      const matchingCount = moduleMatches.length > 0 ? moduleMatches.length : category.moduleCount

      return {
        ...category,
        highlightedModules,
        matchingCount
      }
    })
    .filter((category): category is ShowcaseCategory => category !== null)
})

const totalModuleCount = computed(() => weightedCategories.value.reduce((total, category) => total + category.moduleCount, 0))
const totalCategoryCount = computed(() => weightedCategories.value.length)
const visibleModuleCount = computed(() => {
  if (!normalizedQuery.value) {
    return totalModuleCount.value
  }
  return filteredCategories.value.reduce((total, category) => total + category.matchingCount, 0)
})
const visibleCategoryCount = computed(() => filteredCategories.value.length)

const searchSummary = computed(() => {
  if (!isSearching.value) {
    return `Showing all ${totalCategoryCount.value} categories · ${totalModuleCount.value} modules`
  }
  return `Showing ${visibleCategoryCount.value} ${visibleCategoryCount.value === 1 ? 'category' : 'categories'} · ${visibleModuleCount.value} modules for "${searchQuery.value}"`
})

const clearSearch = () => {
  searchQuery.value = ''
}
</script>

<template>
  <section class="mx-auto max-w-6xl">
    <header class="mx-auto max-w-3xl text-center">
      <h3 class="text-md font-semibold uppercase tracking-[0.35em] text-emerald-500">Welcome to the Zig Standard Library
        book.</h3>
      <p class="mt-4 text-base text-slate-900 dark:text-slate-200">
        Search for a specific standard library module or explore additional references as they land.
        Each category stays in lockstep with Zig's
        <code
          class="rounded bg-emerald-50 px-1.5 py-0.5 font-mono text-sm text-emerald-700 dark:bg-emerald-400/20 dark:text-emerald-200">lib/std/</code>
        tree, so you never chase stale references.
      </p>
    </header>

    <div class="mt-12 flex flex-col gap-6">
      <div
        class="surface-card grid gap-5 p-6 sm:p-8 lg:grid-cols-3 lg:items-start lg:p-9">
        <div class="space-y-4 lg:col-span-2">
          <slot name="announcement" />

          <div>
            <label class="sr-only" for="showcase-search">Search stdlib modules</label>
            <UInput
              id="showcase-search"
              v-model="searchQuery"
              icon="i-lucide-search"
              size="sm"
              color="neutral"
              variant="outline"
              placeholder="Search std lib modules..."
              :ui="{ base: 'text-sm' }"
              :loading="!searchReady && isSearching"
              :disabled="!searchReady && isSearching"
              :aria-describedby="isSearching ? 'search-summary' : undefined"
            >
              <template #trailing>
                <UButton
                  v-if="canClearSearch"
                  size="xs"
                  color="neutral"
                  variant="ghost"
                  icon="i-lucide-x"
                  type="button"
                  aria-label="Clear search input"
                  @click.stop="clearSearch()"
                />
              </template>
            </UInput>
            <p v-if="!searchReady && isSearching" class="mt-2 text-xs text-slate-500 dark:text-slate-400">
              Initializing fuzzy search… results will refine as indexing completes.
            </p>
          </div>
        </div>

        <div class="grid gap-4 sm:grid-cols-2 lg:col-span-1 lg:grid-cols-1">
          <div
            class="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 text-sm text-slate-700 dark:border-slate-700/60 dark:bg-slate-800/70 dark:text-slate-200">
            <p class="text-xs uppercase tracking-[0.25em] text-emerald-500">Categories</p>
            <p class="mt-1 text-xl font-semibold text-slate-900 dark:text-white">{{ visibleCategoryCount }}</p>
            <p class="mt-1 text-xs text-slate-500 dark:text-slate-400">
              <span v-if="!isSearching">of {{ totalCategoryCount }} total</span>
              <span v-else>matching domains</span>
            </p>
          </div>
          <div
            class="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 text-sm text-slate-700 dark:border-slate-700/60 dark:bg-slate-800/70 dark:text-slate-200">
            <p class="text-xs uppercase tracking-[0.25em] text-emerald-500">Modules</p>
            <p class="mt-1 text-xl font-semibold text-slate-900 dark:text-white">{{ visibleModuleCount }}</p>
            <p class="mt-1 text-xs text-slate-500 dark:text-slate-400">
              <span v-if="!isSearching">context entries available</span>
              <span v-else>matching modules</span>
            </p>
          </div>
        </div>
      </div>

      <div
        id="search-summary"
        aria-live="polite"
        class="surface-card--muted flex flex-wrap items-center justify-between gap-3 px-5 py-4 text-sm text-slate-700 dark:text-slate-200"
      >
        <span class="flex items-center gap-2">
          <span class="i-lucide-filter text-base text-emerald-500" aria-hidden="true" />
          <span v-if="!isSearching">
            <span class="font-semibold">{{ totalCategoryCount }}</span>
            categories ·
            <span class="font-semibold">{{ totalModuleCount }}</span>
            modules available
          </span>
          <span v-else>
            Showing
            <span class="font-semibold">{{ visibleCategoryCount }}</span>
            {{ visibleCategoryCount === 1 ? 'category' : 'categories' }} ·
            <span class="font-semibold">{{ visibleModuleCount }}</span>
            modules for "<span class="font-semibold">{{ searchQuery }}</span>"
          </span>
          <span class="sr-only">{{ searchSummary }}</span>
        </span>
        <UButton
          v-if="isSearching"
          size="xs"
          color="primary"
          variant="outline"
          icon="i-lucide-eraser"
          aria-label="Reset search"
          @click="clearSearch()"
        >
          Reset
        </UButton>
      </div>

      <div
        v-if="filteredCategories.length === 0"
        class="surface-card--muted border border-dashed border-emerald-400/50 bg-emerald-400/10 p-10 text-center text-sm text-slate-600 dark:border-emerald-400/60 dark:bg-emerald-400/15 dark:text-emerald-100"
      >
        <p class="font-semibold">No categories or modules match "{{ searchQuery }}".</p>
        <p class="mt-2 text-xs">Try broader terms, or clear the search to browse every standard library domain.</p>
        <div class="mt-4 flex justify-center">
          <UButton
            class="w-full sm:w-auto"
            color="primary"
            icon="i-lucide-rotate-ccw"
            size="sm"
            @click="clearSearch()"
          >
            Browse all categories
          </UButton>
        </div>
      </div>

      <div
        v-else
        class="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
        aria-live="polite"
        :aria-label="`Showing ${visibleCategoryCount} categories`"
      >
        <NuxtLink
          v-for="category in filteredCategories"
          :key="category.key"
          :to="category.path"
          class="group relative flex h-full min-h-[20rem] flex-col overflow-hidden rounded-2xl border border-white/70 bg-white/85 p-6 transition duration-200 hover:-translate-y-1 hover:border-emerald-400/60 hover:shadow-[0_32px_90px_-45px_rgba(16,185,129,0.45)] sm:min-h-[21rem] lg:min-h-[22rem] dark:border-white/10 dark:bg-slate-900/70"
        >
          <div class="flex items-center gap-3">
            <span
              class="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/30 bg-emerald-400/10 text-emerald-500 transition group-hover:border-emerald-400/60 dark:text-emerald-300">
              <span :class="category.icon" class="text-xl" aria-hidden="true" />
            </span>
            <div>
              <p class="text-xs font-semibold uppercase tracking-wide text-emerald-500">{{ category.badge }}</p>
              <h3 class="text-xl font-semibold text-slate-900 dark:text-slate-100">{{ category.label }}</h3>
            </div>
          </div>

          <p class="mt-4 line-clamp-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{{
            category.description }}
          </p>

          <div class="mt-4 flex flex-wrap gap-2 text-xs text-slate-500 dark:text-slate-400">
            <span
              v-for="module in category.highlightedModules"
              :key="module.slug"
              class="inline-flex max-w-[12rem] items-center gap-1 overflow-hidden text-ellipsis whitespace-nowrap rounded-full border border-slate-200/80 bg-slate-100/70 px-3 py-1 font-medium sm:max-w-full dark:border-slate-700 dark:bg-slate-800/70"
              :title="module.navTitle"
            >
              <span class="i-lucide-bookmark text-[0.75rem]" aria-hidden="true" />
              {{ module.navTitle }}
            </span>
            <span
              v-if="category.moduleCount > category.highlightedModules.length"
              class="rounded-full border border-slate-200/80 bg-slate-100/70 px-3 py-1 font-medium dark:border-slate-700 dark:bg-slate-800/70"
              :aria-label="`${category.moduleCount - category.highlightedModules.length} additional modules in ${category.label}`"
            >
              +{{ category.moduleCount - category.highlightedModules.length }} more
              <span class="sr-only"> modules available</span>
            </span>
          </div>

          <div class="mt-auto pt-6">
            <span
              class="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 transition group-hover:gap-3 dark:text-emerald-400">
              Explore docs
              <span class="i-lucide-arrow-right text-base" aria-hidden="true" />
            </span>
          </div>

          <div
            class="pointer-events-none absolute inset-x-0 bottom-0 h-1 scale-x-100 transform bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-500 opacity-40 transition duration-200 ease-out group-hover:opacity-80"
            aria-hidden="true" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
