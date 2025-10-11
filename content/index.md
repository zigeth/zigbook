---
title: "Zigbook Documentation"
description: "Production-ready Zig documentation with curated standard library references, and automated llms.txt outputs."
navigation:
  title: "Home"
seo:
  title: "Zigbook · Zig Std Lib documentation hub"
  description: "Explore the Zig standard library and LLM-friendly artifacts maintained by Zigbook."
---

<MarketingHeroSpotlight />

::u-page-section
#title
Everything you need to ship trustworthy systems docs

#description
Zigbook wraps the entire documentation stack—from Markdown syncing to LLM-ready exports—so your team ships updates fast without sacrificing rigor.
::

<MarketingFeatureGrid class="mt-12" />

::u-page-section
#title
Zig standard library, curated

#description
Fresh copies of the Zig 0.15.1 `std/` Markdown are mirrored into the site automatically. Browse categories or deep-link to module details.
::

<ReferenceCategoryShowcase class="mt-12" />

::u-page-section
#title
Workflows that stay in sync with AI copilots

#description
Each deployment generates `/llms.txt` and `/llms-full.txt`. Share them with internal agents or plug into automated QA pipelines.
::

<div class="relative mx-auto mt-10 max-w-4xl overflow-hidden rounded-3xl border border-emerald-400/30 bg-emerald-400/5 p-8 text-slate-900 shadow-lg dark:border-emerald-400/40 dark:bg-emerald-400/10 dark:text-emerald-50">
  <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.18),_transparent_70%)]" />
  <div class="relative space-y-4">
    <p class="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500 dark:text-emerald-200">Automation tips</p>
    <h3 class="text-2xl font-semibold">Keep llms.txt fresh on every merge</h3>
    <ol class="list-decimal space-y-2 pl-5 text-sm">
      <li>Update docs under <code>std/</code> or any Markdown section.</li>
      <li>Run <code>npm run sync:std</code> to regenerate categorized pages and notes.</li>
      <li>Deploy—`nuxt-llms` will emit `llms.txt` and `llms-full.txt` automatically.</li>
    </ol>
    <p class="text-sm text-slate-700 dark:text-emerald-100/80">
      Looking to wire Zigbook into an internal assistant? Use the quick launcher in the corner to fetch the latest exports and sample prompts.
    </p>
  </div>
</div>

<LLMAssistantLauncher />
