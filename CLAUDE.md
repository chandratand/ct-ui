@AGENTS.md

# ct-ui — chandratand design system

Shared tokens + React components for every chandratand project (portfolio, SaaS). Distributed as a **shadcn registry** (copy-paste, not an npm package): consumers run `npx shadcn add chandratand/ct-ui/<name>` (GitHub registry, this public repo) and own the copied code.

**`docs/design-system.md`** holds the design rules with their reasons, the workflows (§7: port from shadcn, new component, change a token) and the component inventory with what's next (§8). Read it before writing or porting a component or touching a token; update it in the same change when a rule, token or inventory status changes. The hard rules below are the short version.

## Layout

| Path | What |
| --- | --- |
| `tokens/tokens.css` | **Source of truth** for all CSS variables: primitives, semantic (shadcn names), `.dark`, `[data-brand="saas"]`, reduced motion. Framework-agnostic. |
| `tokens/theme.css` | Tailwind v4 bridge (`@theme inline`, `dark` custom variant). |
| `scripts/tokens-to-registry.mjs` | Generates the `tokens` item (`registry:theme`) in `registry.json` from `tokens/*.css`. Mapping documented at the top of the file. |
| `registry/ct-ui/ui/*.tsx` | Component source — what the registry ships. |
| `registry.json` | Registry manifest. The `tokens` item is generated: change `tokens/*.css` and run `pnpm registry:build`. |
| `app/` | Docs/demo site for this repo only (Next.js). Imports `tokens/*.css` directly. Not shipped. |
| `components.json` | shadcn CLI config for this repo (matches the official `registry-template`). Not shipped. |
| `components/ui/` | Staging for shadcn originals while porting. Never committed; delete after the port. |

## Hard rules

1. **Components are framework-agnostic React.** Never import `next/*` (link, image, font, navigation) inside `registry/`. Accept `asChild` (`Slot.Root` from `radix-ui`) so apps can pass their own `<Link>`.
2. **Semantic utilities only** in components (`bg-primary`, `text-muted-foreground`, `border-input`, `font-heading`). Hex values and `brand-*` ramps live in tokens and docs.
3. **Token names follow shadcn exactly.** Additions follow the same pattern (`success`, `success-foreground`, `success-bg`, `success-border`).
4. **Theming:** mode = `.dark` class; brand = `data-brand` attribute. Brands override semantic tokens only; components never know which brand is active. Tokens ship as `cssVars` + `css` on a `registry:theme`, so `shadcn add` merges them into the consumer's `globals.css`.
5. **Sizes:** interactive components take `size: "sm" | "md" | "lg"` → `h-control-sm|md|lg` (32/36/44px). Default `md`.
6. **Radius:** `rounded-sm` 2px (badges, checkboxes), `rounded-md` 4px (inputs, buttons), `rounded-lg` 6px (cards, dialogs). Only avatars, switches and radio buttons go rounder.
7. **Elevation:** borders first. Cards: `border`, no shadow. `shadow-sm` popovers/dropdowns/toasts; `shadow-lg` dialogs/sheets.
8. **Accessibility (WCAG 2.2 AA):** text ≥ 4.5:1; form borders, focus rings, meaningful icons ≥ 3:1. Focus = `focus-visible:ring-2 ring-ring ring-offset-2`. Status always pairs color with icon or text. Motion uses `duration-(--duration-*)`, which collapses to 0 under reduced motion.
9. **Icons:** lucide-react, stroke 1.5, `size-icon-sm` (16) / `size-icon-lg` (20). Exception: the Checkbox mark uses stroke 2 (legibility at 14px).
10. **Radix:** import from the unified `radix-ui` package (`import { Dialog as DialogPrimitive } from "radix-ui"`), never `@radix-ui/react-*`. Registry `dependencies`: `"radix-ui"`.
11. **One component using another** needs two things:
    - Import it via `@/registry/...` (e.g. `import { Button } from "@/registry/ct-ui/ui/button"`). The CLI rewrites `@/registry` to the consumer's alias on install; `@/components/...` and relative paths break.
    - List it in `registryDependencies` as `chandratand/ct-ui/<name>`. A bare `"button"` resolves to **shadcn's** Button. Bare `"utils"` is intentional (shadcn's `cn`, imported as `@/lib/utils`).
12. **Fix ct-ui components here**, then re-pull into apps with `npx shadcn add … --overwrite`. Consuming apps never edit them.
13. **Every component change is done when** it's in `registry.json`, shown on `app/page.tsx` and checked in light + dark, and `pnpm lint`, `pnpm build`, `pnpm registry:build` all pass.

## Commands

pnpm (version pinned in `package.json` → `packageManager`). Consumer-facing docs keep `npx shadcn add`, since apps use any package manager.

`pnpm registry:build` runs `tokens/*.css` → `registry.json` tokens item, then `shadcn build` → `public/r/*.json`.

## Open decisions (revisit when the SaaS starts)

- Copy-paste vs an npm package for components, and `@ct-ui/tokens` on npm.
- Registry hosting. The GitHub registry needs none until then. `ct-ui.vercel.app` is taken; candidate `chandratand-ui.vercel.app`.
