# Performance Baseline · Zigbook Docs

_Stage_: Stage 1 - Environment & Tooling Hardening
_Last updated_: 2025-10-18 (UTC)

## Runtime & Build Context

- Node.js: 22.9.0 (per `.nvmrc`)
- npm: 10.x (bundled with Node.js 22 LTS)
- Chromium: 141.0.7390.54 (snap `chromium-browser`)
- Lighthouse runner: `npx @lhci/cli@0.12.0 collect`
- Build command: `npm run build`; metrics captured against `npm run preview -- --port 3000`
- Host environment: Linux x64 (Codespaces parity)

## Lighthouse Benchmarks (Production Preview)

| Route | Device Profile | Performance | Accessibility | Best Practices | SEO | JS Payload (KiB) | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `/` (landing) | Mobile (Moto G4, 4x CPU throttle) | 56 | 90 | 100 | 100 | 1,115 | FCP 6.9 s · LCP 7.9 s · TBT 190 ms. Heavy initial bundle (search index + og-image tooling) dominates load. |
| `/docs/std/platform/os` | Mobile (Moto G4, 4x CPU throttle) | 34 | 92 | 100 | 99 | 1,110 | FCP 11.2 s · LCP 17.7 s · TBT 920 ms. Hydration of large Markdown payload and client search makes page non-interactive for ~18 s. |
| `/llms.txt` | Desktop (no throttling) | N/A | N/A | N/A | N/A | 0 | Median TTFB 1.8 ms (5-run sample via `curl -w '%{time_starttransfer}'`). |

_Artifacts_: Raw Lighthouse HTML/JSON reports archived in `docs/ops/lighthouse/2025-10-18/`.

## JavaScript Payload Audit (Mobile, initial render)

| Route | Initial JS (KiB) | Target Budget (KiB) | Status | Notes |
| --- | --- | --- | --- | --- |
| `/` (landing) | 1,115 | <=170 | Over budget (6.6x) | Majority of transfer is the docs content search bundle; no post-render interactions measured yet. |
| `/docs/std/platform/os` | 1,110 | <=170 | Over budget (6.5x) | Same payload pattern as landing + page Markdown; need code-splitting and content streaming strategy. |

_Source_: Lighthouse `resource-summary` audit (median of 3 runs, mobile form factor).

## Build Warnings & Errors (2025-10-18)

| Issue | Status | Notes |
| --- | --- | --- |
| `/raw/docs/std/*/_dir.md` prerender failures | open | Raised by `npm run build`; tracked for Stage 2 content integrity work. |
| Sharp binary missing warning | open | nuxt/image optional dependency; low severity in current deployment model. |
| `NUXT_PUBLIC_SITE_URL` missing (sitemap) | open | Configure `site.url` (Stage 2 config cleanup). |

## Baseline Status

- Lighthouse reports captured and published under `docs/ops/lighthouse/2025-10-18/`.
- Performance budgets drafted above; enforcement automation is scheduled under Stage 3 in `docs/todo.md`.
- CI hook work complete; performance regressions will gate on future Lighthouse + payload budget tasks once automated.
