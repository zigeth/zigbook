<template>
  <section
    class="relative overflow-hidden rounded-3xl border border-slate-900/10 bg-slate-950 px-6 py-16 text-slate-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] md:px-16 md:py-20"
  >
    <div class="absolute inset-0 -z-10">
      <div class="pointer-events-none absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-emerald-500/30 blur-3xl" />
      <div class="pointer-events-none absolute -right-32 -top-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.15),_transparent_60%)]" />
    </div>

    <div class="mx-auto max-w-3xl text-center">
      <p class="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-1 text-sm font-semibold uppercase tracking-wide text-emerald-200">
        <span class="i-lucide-cpu" />
        Zig
      </p>
      <h1 class="mt-6 text-4xl font-semibold tracking-tight text-white md:text-5xl">
        Ship production-grade Zig docs with LLM-ready context baked in
      </h1>
      <p class="mt-6 text-lg leading-relaxed text-slate-200">
        Zigbook fuses curated Zig standard library references, and automated
        <code class="rounded bg-white/10 px-2 py-1 font-mono text-sm text-emerald-200">llms.txt</code> feeds so your
        engineers and AI agents stay perfectly in sync.
      </p>

      <div class="mt-10 flex flex-wrap items-center justify-center gap-4">
        <UButton
          size="xl"
          color="primary"
          to="/docs/std/"
          class="font-semibold"
        >
          Browse the standard library
        </UButton>
        <UButton
          size="xl"
          variant="ghost"
          color="white"
          to="/getting-started/installation"
          icon="i-lucide-rocket"
          class="font-semibold text-slate-100"
        >
          Get the docs running
        </UButton>
      </div>

      <div class="mt-12 grid grid-cols-1 gap-6 text-left sm:grid-cols-3">
        <article class="flex items-start gap-3">
          <span class="mt-1 flex h-10 w-10 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-400/10 text-emerald-200">
            <span class="i-lucide-book-open text-xl" />
          </span>
          <div>
            <p class="text-sm font-semibold tracking-wide text-emerald-200/80">Library Reference</p>
            <p class="text-sm text-slate-200/80">Latest Zig 0.15.1 std docs mirrored and categorized for fast lookup.</p>
          </div>
        </article>
        <article class="flex items-start gap-3">
          <span class="mt-1 flex h-10 w-10 items-center justify-center rounded-full border border-indigo-400/40 bg-indigo-400/10 text-indigo-200">
            <span class="i-lucide-bot text-xl" />
          </span>
          <div>
            <p class="text-sm font-semibold tracking-wide text-indigo-200/80">LLM Ops Ready</p>
            <p class="text-sm text-slate-200/80">Automated llms.txt + og assets to keep AI copilots context-aware.</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
