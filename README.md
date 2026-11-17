# ct-ui

The chandratand design system: tokens and React components shared by the chandratand portfolio and SaaS. Built on shadcn/ui conventions, Tailwind CSS v4 and Radix.

- Brand anchor `#326897` · WCAG 2.2 AA · light + dark · brand themes via `data-brand`
- Framework-agnostic React components (no `next/*` imports) — works in Next.js, Vite, React Router

## Use in a project

Requires a shadcn project (`components.json`, Tailwind CSS v4).

1. Add the theme. The shadcn CLI merges the tokens into your `globals.css` (`:root`, `.dark`, `@theme inline`, brand and reduced-motion rules):

   ```bash
   npx shadcn@latest add chandratand/ct-ui/tokens
   ```

2. Add components:

   ```bash
   npx shadcn@latest add chandratand/ct-ui/button chandratand/ct-ui/input chandratand/ct-ui/card
   ```

   The registry is this public GitHub repo (root `registry.json`); no hosting or `components.json` entry is needed.

3. Theming is the app's job: put `.dark` on `<html>` for dark mode (e.g. `next-themes` with `attribute="class"`), and `data-brand="saas"` for the SaaS brand. Load your fonts and set `--font-sans` / `--font-mono` on `html`.

Never edit ct-ui components inside an app. Fix them here, then pull again with `npx shadcn add … --overwrite`.

## Develop

```bash
pnpm install
pnpm dev              # demo at localhost:3000
pnpm registry:build   # tokens/*.css → registry.json tokens item, then public/r/*.json
```

Design rules and workflows: [`docs/design-system.md`](docs/design-system.md). Short rules for Claude Code: `CLAUDE.md`.
