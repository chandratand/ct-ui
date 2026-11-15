# ct-ui

The chandratand design system: tokens and React components shared by the chandratand portfolio and SaaS. Built on shadcn/ui conventions, Tailwind CSS v4 and Radix.

- Brand anchor `#326897` · WCAG 2.2 AA · light + dark · brand themes via `data-brand`
- Framework-agnostic React components (no `next/*` imports) — works in Next.js, Vite, React Router

## Use in a project

1. Point the shadcn CLI at the registry in your `components.json`:

   ```json
   {
     "registries": {
       "@ct-ui": "https://YOUR_REGISTRY_HOST/r/{name}.json"
     }
   }
   ```

2. Add tokens and components:

   ```bash
   npx shadcn add @ct-ui/tokens @ct-ui/button @ct-ui/input @ct-ui/card @ct-ui/badge
   ```

3. In `globals.css`:

   ```css
   @import "tailwindcss";
   @import "./styles/ct-ui/tokens.css";
   @import "./styles/ct-ui/theme.css";
   ```

4. Theming is the app's job: put `.dark` on `<html>` for dark mode (e.g. `next-themes` with `attribute="class"`), and `data-brand="saas"` for the SaaS brand. Load your fonts and set `--font-sans` / `--font-mono` on `html`.

## Develop

```bash
npm install
npm run dev              # demo at localhost:3000
npm run registry:build   # writes public/r/*.json
```

Rules for contributors (and Claude Code) are in `CLAUDE.md`.
