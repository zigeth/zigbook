<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'

defineOptions({ name: 'LlmAssistantLauncher' })

const isMounted = ref(false)
const isOpen = ref(false)
const isLoading = ref(false)
const llmsPreview = ref('')
const errorMessage = ref('')

const toast = useToast()

const quickLinks = [
  { label: 'Open llms.txt', href: '/llms.txt', icon: 'i-lucide-file-text' },
  { label: 'View llms-full.txt', href: '/llms-full.txt', icon: 'i-lucide-expand' }
] as const

const promptStarters = [
  'Using https://zigbook.net for reference, summarize the difference between std.array_list.Aligned and AlignedManaged.',
  'Using the stdlib docs at https://zigbook.net, how does Zig handle error unions?',
  'List Zig standard library modules related to cryptography.',
  'Outline allocator patterns recommended by https://zigbook.net.'
] as const

const hasPreview = computed(() => llmsPreview.value.trim().length > 0)
const hasError = computed(() => errorMessage.value.trim().length > 0)

onMounted(() => {
  isMounted.value = true
})

const openLauncher = () => {
  isOpen.value = true
}

const closeLauncher = () => {
  isOpen.value = false
}

const loadPreview = async () => {
  if (!import.meta.client || isLoading.value) {
    return
  }

  isLoading.value = true
  errorMessage.value = ''

  try {
    const data = await $fetch<string>('/llms.txt', {
      method: 'GET',
      headers: { accept: 'text/plain' }
    })

    llmsPreview.value = (data ?? '')
      .split('\n')
      .slice(0, 40)
      .join('\n')
      .trim()
  } catch (error) {
    console.error('Failed to load llms.txt preview', error)
    llmsPreview.value = ''
    errorMessage.value = 'Unable to load the latest llms.txt preview. Try again in a moment.'
  } finally {
    isLoading.value = false
  }
}

watch(
  isOpen,
  (value) => {
    if (value && !hasPreview.value && !hasError.value) {
      void loadPreview()
    }
  }
)

const copyPrompt = async (prompt: string) => {
  if (!import.meta.client || !navigator.clipboard) {
    toast.add({
      title: 'Clipboard unavailable',
      description: 'Copy the text manually—this browser does not expose clipboard APIs.',
      color: 'warning',
      icon: 'i-lucide-clipboard-x'
    })
    return
  }

  try {
    await navigator.clipboard.writeText(prompt)
    toast.add({
      title: 'Prompt copied',
      icon: 'i-lucide-clipboard-check',
      color: 'primary'
    })
  } catch (error) {
    console.error('Failed to copy prompt', error)
    toast.add({
      title: 'Copy failed',
      description: 'Copy the text manually instead.',
      color: 'error',
      icon: 'i-lucide-alert-triangle'
    })
  }
}
</script>

<template>
  <div class="relative mx-auto max-w-4xl">
    <Transition name="fade">
      <button
        v-if="isMounted && !isOpen"
        type="button"
        class="fixed bottom-6 right-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/50 bg-slate-900/90 px-5 py-3 text-sm font-semibold text-emerald-100 shadow-2xl backdrop-blur md:bottom-10 md:right-10"
        @click="openLauncher"
      >
        <span class="i-lucide-sparkles text-lg" />
        Open AI context
      </button>
    </Transition>

    <USlideover v-model="isOpen" :overlay="true" side="right">
      <div class="flex h-full max-w-xl flex-col bg-slate-950 text-slate-100">
        <header class="flex items-start justify-between border-b border-slate-800 px-6 py-5">
          <div>
            <p class="text-lg font-semibold uppercase text-emerald-400">Zigbook LLM console</p>
            <p class="mt-2 text-sm text-slate-300">
              Connect your AI Agent / CoPilot to Zigbook!
            </p>
          </div>
          <UButton icon="i-lucide-x" variant="ghost" color="neutral" aria-label="Close assistant" @click="closeLauncher" />
        </header>

        <div class="flex-1 overflow-y-auto px-6 py-6">
          <div class="space-y-6">
            <section class="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5">
              <UAlert color="info" icon="i-lucide-bot" orientation="horizontal">
                <template #description>
                  Keep your AI Agent / CoPilot context aware & grounded.
                </template>
              </UAlert>
            </section>

            <section class="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5">
              <h3 class="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">Quick links</h3>
              <p class="mt-2 text-sm text-slate-300">
                Keep copilots grounded with the latest llms exports.
              </p>
              <div class="mt-4 flex flex-col gap-2">
                <UButton
                  v-for="link in quickLinks"
                  :key="link.href"
                  :to="link.href"
                  target="_blank"
                  rel="noopener"
                  :icon="link.icon"
                  color="primary"
                  variant="soft"
                >
                  {{ link.label }}
                </UButton>
              </div>
            </section>

            <section class="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5">
              <h3 class="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">Prompt starters</h3>
              <p class="mt-2 text-sm text-slate-300">
                Seed the assistant with high-signal requests drawn from the Zigbook corpus.
              </p>
              <ul class="mt-4 space-y-2">
                <li
                  v-for="prompt in promptStarters"
                  :key="prompt"
                  class="group flex items-center justify-between gap-3 rounded-xl border border-slate-800/80 bg-slate-900/70 px-4 py-3 text-sm text-slate-200"
                >
                  <span class="flex-1">{{ prompt }}</span>
                  <UButton
                    icon="i-lucide-copy"
                    size="sm"
                    color="neutral"
                    variant="ghost"
                    aria-label="Copy prompt"
                    @click="copyPrompt(prompt)"
                  />
                </li>
              </ul>
            </section>

            <section class="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5">
              <div class="flex items-center justify-between gap-3">
                <h3 class="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">Latest extract</h3>
                <UButton
                  icon="i-lucide-rotate-cw"
                  size="xs"
                  color="neutral"
                  variant="ghost"
                  :loading="isLoading"
                  :disabled="isLoading"
                  @click="loadPreview"
                >
                  Refresh
                </UButton>
              </div>
              <div class="mt-4 rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                <div v-if="isLoading" class="flex items-center gap-2 text-slate-400">
                  <span class="i-lucide-loader-circle animate-spin" /> Loading llms.txt…
                </div>
                <UAlert v-else-if="hasError" color="error" icon="i-lucide-alert-triangle">
                  <template #title>Preview unavailable</template>
                  <template #description>{{ errorMessage }}</template>
                </UAlert>
                <pre v-else-if="hasPreview" class="max-h-64 overflow-y-auto whitespace-pre-wrap break-words font-mono text-xs leading-5 text-slate-200">
                  {{ llmsPreview }}
                </pre>
                <p v-else class="text-sm text-slate-400">
                  Open the panel to fetch the latest `llms.txt` context snapshot. The preview shows the first 40 lines served to crawlers and assistants.
                </p>
              </div>
            </section>
          </div>
        </div>

        <footer class="border-t border-slate-800 px-6 py-5 text-xs text-slate-400">
          Updates mirror the public `llms.txt` exports shipped with Zigbook. Refresh to pull a fresh extract or trigger a rebuild after syncing content.
        </footer>
      </div>
    </USlideover>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
