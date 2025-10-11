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
        Zig Standard Library docs.
      </h1>
      <p class="mt-6 text-lg leading-relaxed text-slate-200">
        Zigbook demystifies the
        <code class="rounded bg-white/10 px-2 py-1 font-mono text-sm text-emerald-200">Zig Standard Library</code>
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
      </div>
    </div>
  </section>
</template>
