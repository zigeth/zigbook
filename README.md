# Zigbook Documentation Portal

Zigbook is a Nuxt-powered documentation site that republishes the Zig 0.15.1 standard library with curated navigation and LLM-friendly exports. The goal is to provide a production-grade reference for Zig developers until the upstream docs stabilize.

## Requirements

- Node.js 22.9.0 (or newer 22.x release) with the built-in `node:sqlite` module
- npm 10.x (ships with Node 22)
- macOS, Linux, or WSL2 environment with `git`

Use `nvm use` (or install via Volta/ASDF) to align with the pinned runtime:

```bash
nvm use
```

The repo enforces engines via `.npmrc`, so older Node versions will be rejected at install time.

## Setup

```bash
# Install dependencies (lockfile driven)
npm install

# Launch the development server
npm run dev

# Run linting and type analysis
npm run lint
npm run typecheck
```

Visit `http://localhost:3000` after `npm run dev` boots.

## Project Layout

```
├── app.config.ts          # Docus theming, header/footer, UI overrides
├── assets/                # Tailwind entrypoint and shared styles
├── components/            # Vue components for reference navigation and tools
├── content/               # Hand-authored and generated Markdown via Nuxt Content
├── data/std-categories.json
│                          # Category metadata for Zig stdlib syncing
├── scripts/sync-std-docs.mjs
│                          # Generates /content/docs/std/* from /std sources
├── std/                   # Vendored Zig 0.15.1 Markdown from upstream
├── nuxt.config.ts         # Nuxt configuration (modules, content, tailwind)
├── tailwind.config.ts     # Tailwind 4 theme extensions
├── docs/                  # Engineering docs, including active to-do list
└── public/                # Static assets (favicons, logos, OG images)
```

## Content Sync Workflow

1. Update Markdown in `std/` or category metadata in `data/std-categories.json`.
2. Run `npm run sync:std` to regenerate the Nuxt Content entries under `content/docs/std/`.
3. Commit both the source Markdown and generated files to keep history in sync.

The `sync-std-docs.mjs` script maintains front matter, SEO metadata, badges, and callouts automatically. It will throw when category assignments are missing to avoid silent omissions.

## Quality Gates

- **Linting:** `npm run lint` uses the Nuxt flat ESLint configuration.
- **Type safety:** `npm run typecheck` calls `nuxt typecheck` for full app analysis.
- **Build:** `npm run build` performs the production compile and Nitro output generation.
- **CI:** GitHub Actions run install → lint → typecheck → build on every push and pull request (see `.github/workflows/ci.yml`).

## Contributing

1. Create a feature branch from `main`.
2. Make changes with tests/docs as needed.
3. Run `npm run lint`, `npm run typecheck`, and `npm run build` locally.
4. Submit a pull request; the CI workflow must pass before review.

For larger enhancements, coordinate using the roadmap and to-do list in `docs/` so we can stage work across milestones.

## License

MIT.