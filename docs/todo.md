# Delivery Plan · Zigbook Docs

## Stage 1 – Environment & Tooling Hardening (in flight)

- [x] Pin direct dependencies and drop the `better-sqlite3` native requirement.
- [x] Enforce Node.js 22 runtime across local and CI environments.
- [x] Refresh the contributor README with accurate setup steps and tooling commands.
- [x] Stand up a CI pipeline that runs install, lint, dependency-filtered type-check, and build on pull requests.
- [x] Add commit hooks (Husky + lint-staged) so lint/typecheck/build run before every commit.
- [x] Define baseline Lighthouse & JS payload metrics; write results to `docs/ops/baseline.md` with target budgets.

## Stage 2 – Docs Integrity & Build Stability (next)

- [ ] Fix the `/raw/docs/std/*/_dir.md` prerender failures uncovered during `npm run build` (likely sync script edge cases).
- [ ] Ensure `NUXT_PUBLIC_SITE_URL` (or `site.url` config) is populated in all environments to silence sitemap warnings.
- [ ] Add regression tests around `scripts/sync-std-docs.mjs` (dry-run mode + snapshot of generated front matter).
- [ ] Introduce content validation checks (broken link detection, orphaned category entries) in CI.

## Stage 3 – Performance, Accessibility & Observability (later)

- [ ] Automate Lighthouse runs in CI (guard rails on performance ≥90, accessibility ≥95).
- [ ] Add axe-core accessibility smoke tests for docs templates.
- [ ] Instrument structured logging/analytics for `llms.txt` export freshness and sync invocations.
- [ ] Benchmark critical routes and document budgets (home, `/docs/std/:category`, `/llms.txt`).

## Stage 4 – LLM & Contributor Experience (stretch)

- [ ] Ship guided authoring docs covering Markdown conventions, sync workflow, and AI prompt hygiene.
- [ ] Publish a changelog/what’s-new page sourced from Git history (surface notable standard library updates).
- [ ] Expose API hooks or webhooks for internal copilots to request targeted doc refreshes.
