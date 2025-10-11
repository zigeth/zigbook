<script setup lang="ts">
const isOpen = ref(false)
const isLoading = ref(false)
const llmsPreview = ref('')
const errorMessage = ref('')

const toast = useToast()

const loadPreview = async () => {
  try {
    isLoading.value = true
    errorMessage.value = ''
    const { data, error } = await useFetch<string>('/llms.txt', {
      server: false,
      transform: (value) => value?.split('\n').slice(0, 40).join('\n') ?? ''
    })
    if (error.value) {
      throw error.value
    }
    llmsPreview.value = data.value ?? ''
  } catch (err) {
    errorMessage.value = 'Unable to load the latest llms.txt preview. Try refreshing the page.'
    console.error(err)
  } finally {
    isLoading.value = false
  }
}

watch(isOpen, (value) => {
  if (value && !llmsPreview.value && !isLoading.value) {
    loadPreview()
  }
})

const promptStarters = [
  'Summarize the difference between std.array_list.Aligned and AlignedManaged.',
  'How does Zigbook integrate with Erigon for state snapshots?',
  'List Zig standard library modules related to cryptography.',
  'Outline allocator patterns recommended by Zigbook.'
]

const copyPrompt = async (prompt: string) => {
  if (typeof navigator === 'undefined' || !navigator.clipboard) {
    toast.add({
      title: 'Clipboard unavailable',
      description: 'Copy the text manually—this browser does not expose clipboard APIs.',
      color: 'amber',
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
  } catch (err) {
    console.error(err)
    toast.add({
      title: 'Copy failed',
      description: 'Copy the text manually instead.',
      color: 'rose',
      icon: 'i-lucide-alert-triangle'
    })
  }
}
</script>

<template>
  <div>
    <Transition name="fade">
      <button
        v-if="!isOpen"
        class="fixed bottom-6 right-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/50 bg-slate-900/90 px-5 py-3 text-sm font-semibold text-emerald-100 shadow-2xl backdrop-blur md:bottom-10 md:right-10"
        @click="isOpen = true"
      >
        <span class="i-lucide-sparkles text-lg" />
        Ask Zigbook AI
      </button>
    </Transition>

    <USlideover v-model="isOpen" :overlay="true" side="right" class="w-full max-w-lg">
      <div class="flex h-full flex-col overflow-hidden bg-slate-950 text-slate-100">
        <header class="flex items-start justify-between border-b border-slate-800 px-6 py-5">
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">nuxt-llms</p>
            <h2 class="mt-1 text-xl font-semibold">AI assistant playbook</h2>
            <p class="mt-2 text-sm text-slate-300">
              Share this context with your internal copilots to keep them grounded in the same docs shipped to humans.
            </p>
          </div>
          <UButton icon="i-lucide-x" variant="ghost" color="white" @click="isOpen = false" />
        </header>

        <div class="flex-1 overflow-y-auto px-6 py-6">
          <div class="space-y-6">
            <section>
              <h3 class="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">Quick links</h3>
              <div class="mt-3 flex flex-col gap-3">
                <UButton
                  color="primary"
                  icon="i-lucide-file-text"
                  :to="'/llms.txt'"
                  target="_blank"
                  rel="noopener"
                >
                  Open llms.txt
                </UButton>
                <UButton
                  icon="i-lucide-expand"
                  variant="ghost"
                  color="white"
                  :to="'/llms-full.txt'"
                  target="_blank"
                  rel="noopener"
                >
                  View extended llms-full.txt
                </UButton>
              </div>
            </section>

            <section>
              <h3 class="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">Prompt starters</h3>
              <ul class="mt-3 space-y-2">
                <li
                  v-for="prompt in promptStarters"
                  :key="prompt"
                  class="group flex items-center justify-between gap-3 rounded-xl border border-slate-800/80 bg-slate-900/60 px-4 py-3 text-sm text-slate-200"
                >
                  <span class="flex-1">{{ prompt }}</span>
                  <UButton
                    color="white"
                    variant="ghost"
                    icon="i-lucide-copy"
                    size="sm"
                    @click="() => copyPrompt(prompt)"
                  />
                </li>
              </ul>
            </section>

            <section>
              <h3 class="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">Latest extract</h3>
              <div class="relative rounded-2xl border border-slate-800 bg-slate-900/60 p-4 font-mono text-xs leading-5 text-slate-200">
                <div v-if="isLoading" class="flex items-center gap-2 text-slate-400">
                  <span class="i-lucide-loader-circle animate-spin" /> Loading llms.txt…
                </div>
                <div v-else-if="errorMessage" class="text-rose-300">{{ errorMessage }}</div>
                <pre v-else class="max-h-64 whitespace-pre-wrap break-words">{{ llmsPreview }}</pre>
              </div>
            </section>
          </div>
        </div>

        <footer class="border-t border-slate-800 px-6 py-5 text-xs text-slate-400">
          Keep llms.txt fresh by rerunning <code class="rounded bg-slate-800 px-2 py-1">npm run sync:std</code> after every docs push.
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
