@AGENTS.md

# ct-ui — chandratand design system

Shared tokens + React components for every chandratand project (portfolio, SaaS). Distributed as a **shadcn registry** (copy-paste, not an npm package): consumers run `npx shadcn add chandratand/ct-ui/<name>` (GitHub registry, this public repo) and own the copied code.

**Design rules, with the reasons behind them: `docs/design-system.md`.** Read it before porting or writing a component, and update it when a rule or token changes. The hard rules below are the short version.

Old visual reference (Claude Design): https://claude.ai/artifact/BQwVS2i3EizehDojo1RqeM. Superseded by this repo; to be replaced by an artifact generated from it.

## Layout

| Path | What |
| --- | --- |
| `tokens/tokens.css` | **Source of truth** for all CSS variables: primitives, semantic (shadcn names), `.dark`, `[data-brand="saas"]`, reduced motion. Framework-agnostic. |
| `tokens/theme.css` | Tailwind v4 bridge (`@theme inline`, `dark` custom variant). |
| `scripts/tokens-to-registry.mjs` | Converts `tokens/*.css` into the `tokens` item (`registry:theme`) in `registry.json`. The mapping is documented at the top of the file. |
| `registry/ct-ui/ui/*.tsx` | Component source — what the registry ships. |
| `registry.json` | Registry manifest. The `tokens` item is generated — never edit it by hand. `pnpm registry:build` → `public/r/*.json`. |
| `app/` | Docs/demo site for this repo only (Next.js). Imports `tokens/*.css` directly. Not shipped. |
| `components.json` | shadcn CLI config for this repo (same as the official `registry-template`). Enables `shadcn migrate`, `shadcn add` and `shadcn info` here. Not shipped. |
| `lib/utils.ts` | `cn()`. Consumers get the shadcn one via `registryDependencies: ["utils"]`. |

## Hard rules

1. **Components are framework-agnostic React.** Never import `next/*` (link, image, font, navigation) inside `registry/`. Accept `asChild` (`Slot.Root` from `radix-ui`) so apps can pass their own `<Link>`.
2. **No raw colors or fonts in components.** Only semantic utilities (`bg-primary`, `text-muted-foreground`, `border-input`, `font-heading`). Never hex, never `brand-*` in components (brand ramps are for tokens and docs).
3. **Token names follow shadcn exactly.** Additions follow the same pattern (`success`, `success-foreground`, `success-bg`, `success-border`).
4. **Theming:** mode = `.dark` class; brand = `data-brand` attribute. Brands override semantic tokens only. Components never know which brand is active. Tokens ship the official shadcn way (`cssVars` + `css` on a `registry:theme`), so `shadcn add` merges them into the consumer's `globals.css`. Change tokens in `tokens/*.css` only.
5. **Sizes:** interactive components take `size: "sm" | "md" | "lg"` → `h-control-sm|md|lg` (32/36/44px). Default `md`.
6. **Radius:** `rounded-sm` 2px (badges, checkboxes), `rounded-md` 4px (inputs, buttons), `rounded-lg` 6px (cards, dialogs). Nothing rounder except avatars, switches and radio buttons.
7. **Elevation:** borders first. Cards: `border`, no shadow. `shadow-sm` popovers/dropdowns/toasts; `shadow-lg` dialogs/sheets.
8. **Accessibility (WCAG 2.2 AA):** text ≥ 4.5:1; form borders, focus rings, meaningful icons ≥ 3:1. Focus = `focus-visible:ring-2 ring-ring ring-offset-2`. Status always pairs color with icon or text. Motion uses `duration-(--duration-*)`, which collapses to 0 under reduced motion.
9. **Icons:** lucide-react, stroke 1.5, `size-icon-sm` (16) / `size-icon-lg` (20). Exception: the Checkbox mark uses stroke 2 (legibility at 14px).
10. **Radix:** import from the unified `radix-ui` package (`import { Dialog as DialogPrimitive } from "radix-ui"`), never `@radix-ui/react-*`. Registry `dependencies`: `"radix-ui"`.
11. **One component using another** needs two things:
    - Import it via `@/registry/...` (e.g. Dialog: `import { Button } from "@/registry/ct-ui/ui/button"`). Never `@/components/...` or a relative path. The CLI rewrites `@/registry` to the consumer's alias on install.
    - List it in `registryDependencies` with the GitHub address `chandratand/ct-ui/<name>` (e.g. `chandratand/ct-ui/button`). A bare `"button"` resolves to **shadcn's** Button. Bare `"utils"` is intentional (shadcn's `cn`, imported as `@/lib/utils`).
12. **Never edit ct-ui components inside a consuming app.** Fix them here, then re-pull with `npx shadcn add … --overwrite`.
13. Every new component: add it to `registry.json`, show it on `app/page.tsx` in light + dark, run `pnpm lint`, `pnpm build` and `pnpm registry:build`.

## Status

Done: tokens (`registry:theme`), Button, Input, Card, Badge, Label, Textarea, Select, Checkbox, Switch, Dialog, Alert Dialog, Dropdown Menu, Tooltip, Toast (sonner), Popover, Tabs, Table, Alert, Radio Group, Separator, Skeleton, Avatar. Radix on the unified `radix-ui` package.
Next (priority 2): Sheet, Sidebar, Breadcrumb, Pagination, Command/Combobox, Field, Progress, Spinner, Empty, Accordion, Scroll Area, Date Picker. Then a `registry:style` item (`extends: "none"`) that installs everything in one command.

Porting from shadcn: follow the checklist in `docs/design-system.md` §7.1 (pull into `components/ui/` staging, never commit it, rewrite into `registry/ct-ui/ui/`). Overlay enter/exit animations use `tw-animate-css` classes with `duration-(--duration-*)` (consumer projects from `shadcn init` already import it). Scrim colour = `bg-overlay` token.

Open decisions (revisit when the SaaS starts):
- Copy-paste vs an npm package for components, and `@ct-ui/tokens` on npm.
- Registry hosting. Until then the GitHub registry needs no hosting. `ct-ui.vercel.app` is taken; candidate `chandratand-ui.vercel.app`.

## Commands

This repo uses pnpm (version pinned in `package.json` → `packageManager`). Consumer apps can use any package manager; install docs keep `npx shadcn add`.

- `pnpm dev` — demo site
- `pnpm build` — type-check + build
- `pnpm registry:build` — `tokens/*.css` → `registry.json` tokens item, then `public/r/*.json`
