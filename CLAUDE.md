@AGENTS.md

# ct-ui — chandratand design system

Shared tokens + React components for every chandratand project (portfolio, SaaS). Distributed as a **shadcn registry**: consumers run `npx shadcn add @ct-ui/<name>` and own the copied code.

Visual reference (made in Claude Design): https://claude.ai/artifact/BQwVS2i3EizehDojo1RqeM — component READMEs, API notes and previews live there under `project/`. This repo is now the source of truth; the artifact is reference only.

## Layout

| Path | What |
| --- | --- |
| `tokens/tokens.css` | All CSS variables: primitives, semantic (shadcn names), `.dark`, `[data-brand="saas"]`. Framework-agnostic. |
| `tokens/theme.css` | Tailwind v4 bridge (`@theme inline`, `dark` custom variant). |
| `registry/ct-ui/ui/*.tsx` | Component source — what the registry ships. |
| `registry.json` | Registry manifest. `npx shadcn build` → `public/r/*.json`. |
| `app/` | Docs/demo site for this repo only (Next.js). Not shipped. |
| `lib/utils.ts` | `cn()`. Consumers get the shadcn one via `registryDependencies: ["utils"]`. |

## Hard rules

1. **Components are framework-agnostic React.** Never import `next/*` (link, image, font, navigation) inside `registry/`. Accept `asChild` (Radix Slot) so apps can pass their own `<Link>`.
2. **No raw colors or fonts in components.** Only semantic utilities (`bg-primary`, `text-muted-foreground`, `border-input`, `font-heading`). Never hex, never `brand-*` in components (brand ramps are for tokens and docs).
3. **Token names follow shadcn exactly.** Additions follow the same pattern (`success`, `success-foreground`, `success-bg`, `success-border`).
4. **Theming:** mode = `.dark` class; brand = `data-brand` attribute. Brands override semantic tokens only. Components never know which brand is active.
5. **Sizes:** interactive components take `size: "sm" | "md" | "lg"` → `h-control-sm|md|lg` (32/36/44px). Default `md`.
6. **Radius:** `rounded-sm` 2px (badges, checkboxes), `rounded-md` 4px (inputs, buttons), `rounded-lg` 6px (cards, dialogs). Nothing rounder except avatars/switches.
7. **Elevation:** borders first. Cards: `border`, no shadow. `shadow-sm` popovers/dropdowns/toasts; `shadow-lg` dialogs/sheets.
8. **Accessibility (WCAG 2.2 AA):** text ≥ 4.5:1; form borders, focus rings, meaningful icons ≥ 3:1. Focus = `focus-visible:ring-2 ring-ring ring-offset-2`. Status always pairs color with icon or text. Motion uses `duration-(--duration-*)`, which collapses to 0 under reduced motion.
9. **Icons:** lucide-react, stroke 1.5, `size-icon-sm` (16) / `size-icon-lg` (20).
10. Every new component: add it to `registry.json`, show it on `app/page.tsx` in light + dark, run `npm run build` and `npm run registry:build`.

## Status

Done: tokens, Button, Input, Card, Badge.
Next (see artifact READMEs for API): Label, Textarea, Select, Checkbox, Switch, Dialog, Dropdown Menu, Tabs, Table (comfortable/compact density), Toast (sonner), Tooltip.

Open decisions: npm package for tokens (`@ct-ui/tokens`) — deferred until the SaaS starts; registry hosting (likely Vercel).

## Commands

- `npm run dev` — demo site
- `npm run build` — type-check + build
- `npm run registry:build` — regenerate `public/r/*.json`
