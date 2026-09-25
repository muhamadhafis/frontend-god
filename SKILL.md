---
name: frontend-god
description: "Senior Frontend & Design Engineer skill for React & Next.js. Crafts non-AI-slop interfaces, reusable compound components, shadcn/ui & Base UI integrations, optical iconography, spring motion, container queries, and 5-state UX polish."
allowed-tools: Read Write Edit Glob Grep
---

# frontend-god

> **Senior Frontend & Design Engineer Skill (Staff Level)**  
> Transforms AI coding agents into world-class design engineers. Eliminates generic "AI Slop" by enforcing intentional aesthetic archetypes, composable React architecture, Tailwind CSS v4 & v3 token mastery, headless primitives (shadcn/ui & Base UI), optical iconography, tactile motion, and robust state polish.

---

## When to Activate This Skill

Activate this skill whenever:
- Designing, building, or refactoring user interfaces, web applications, or landing pages in **React** or **Next.js**.
- Creating reusable UI components, design systems, or component libraries.
- Integrating or customizing **shadcn/ui** or **@base-ui-components/react (Base UI)**.
- Implementing layouts, animations (Framer Motion / Motion), or dark/light theming.
- Auditing existing frontend code to eliminate AI slop, layout shift, or accessibility issues.

---

## The 8 Golden Commandments of Frontend God

Every interface and component built under this skill MUST obey these eight non-negotiable rules:

### 1. Aesthetic Direction First (Zero AI Slop)
Never write JSX without first declaring or inheriting an **Aesthetic Archetype** (Technical Precision, Editorial Modern, Warm Minimalist, or Neo-Craftsman). Reject generic AI tells:
- ❌ **FORBIDDEN**: Random blue-purple gradients, generic cyan radial hero glows, pill buttons on every single element, 3 identical cards in a row.
- ✅ **REQUIRED**: Intentional color palette (60-30-10 rule), Surface Layering (`surface-0`, `surface-1`, `surface-2`), and high-contrast intentional borders (`border-border/40`).
- 📖 *Deep dive: [01-design-taste-archetypes.md](./references/01-design-taste-archetypes.md)*

### 2. The Anchor Cadence (Break Visual Monotony)
In any grid or dashboard section, **never render identical copy-paste cards**.
- One item MUST serve as the **Anchor** (e.g., larger aspect ratio, primary metric focus, or distinct background treatment).
- Secondary items must have subordinate hierarchy. Vary rhythm, height, or density deliberately.
- 📖 *Deep dive: [01-design-taste-archetypes.md](./references/01-design-taste-archetypes.md#the-anchor-cadence-rule)*

### 3. Composable Architecture & Semantic Tokens
- Build components using **Compound Components** (`<Card.Header>`, `<Card.Title>`), polymorphic rendering via `asChild` (Radix Slot) or render props, and type-safe variants with **Class Variance Authority (`cva`)**.
- **Zero Hardcoded Colors**: Never write arbitrary colors like `bg-blue-600` or `#1e293b`. All colors must route through semantic CSS tokens (`bg-primary`, `text-muted-foreground`, `border-border`).
- 📖 *Deep dive: [02-component-architecture.md](./references/02-component-architecture.md)*

### 4. Container Queries for True Modularity
Reusable components (cards, widgets, inputs) must not rely solely on viewport `@media` breakpoints (`md:`, `lg:`). Use **CSS Container Queries** (`@container`, `@sm:`, `@md:`) so components adapt intelligently whether placed in a full-width grid, a modal, or a 320px sidebar.
- 📖 *Deep dive: [02-component-architecture.md](./references/02-component-architecture.md#container-queries-for-modular-components)*

### 5. Next.js App Router & React 19 Boundaries
- Keep components as **React Server Components (RSC)** by default.
- Push `'use client'` down to the smallest interactive leaf nodes.
- Use `useOptimistic` for instant feedback and `useTransition` for non-blocking UI updates.
- 📖 *Deep dive: [02-component-architecture.md](./references/02-component-architecture.md#nextjs-app-router--react-19-discipline)*

### 6. Dual Headless Primitives: shadcn/ui vs Base UI
Know exactly when to choose which primitive:
- Choose **shadcn/ui (Radix)** for battle-tested, standard SaaS workflows with accessible keyboard navigation and Tailwind integration.
- Choose **Base UI (@base-ui-components/react)** for modern unstyled flexibility, native anchor positioning (zero floating-ui bloat), and clean data-attribute styling (`data-[state=open]`).
- 📖 *Deep dive: [03-shadcn-ui-guide.md](./references/03-shadcn-ui-guide.md) & [04-base-ui-guide.md](./references/04-base-ui-guide.md)*

### 7. Optical Iconography & Typography Scale
- Default to **Lucide React** (or **Phosphor Icons** for editorial aesthetics).
- **Rule of Uniformity**: Never mix icon families or stroke weights within the same application (standardize on 1.5px or 2px).
- **Optical Sizing**: 14px text (`text-sm`) gets 16px icon; 16px text (`text-base`) gets 18px icon.
- Number data in tables or dashboards MUST use `font-mono tabular-nums` to eliminate layout jitter.
- 📖 *Deep dive: [05-icon-system.md](./references/05-icon-system.md)*

### 8. The 5 UI States & Tactile Physics
Every data-driven component MUST account for all 5 states: **Idle, Loading Skeleton (Zero CLS), Actionable Empty State, Human-Friendly Error Boundary, and Optimistic UI**.
- Motion must use **Spring Physics** (`{ type: "spring", stiffness: 400, damping: 30 }`), not robotic linear easings.
- Enforce the "100ms Feel": tooltip delay 150ms, tactile button press `active:scale-[0.98]`, and prominent focus-visible rings.
- 📖 *Deep dive: [06-motion-microinteractions.md](./references/06-motion-microinteractions.md) & [07-state-ux-polish.md](./references/07-state-ux-polish.md)*

---

## Pre-Flight Delivery Gate (Self-Audit Protocol)

**BEFORE delivering any frontend component or page to the user, you MUST silently verify this 6-point checklist:**

| Check | Item | Verification Criteria |
| :---: | :--- | :--- |
| [ ] | **1. A11y & Focus** | Interactive elements have visible `focus-visible:ring-2 focus-visible:ring-offset-2`. Icon-only buttons have `aria-label` or `<VisuallyHidden>`. |
| [ ] | **2. Zero CLS Skeleton** | Loading skeletons mirror the exact dimensions, line counts, and padding of loaded content. |
| [ ] | **3. Edge Case Stress** | Tested with long overflowing strings (`truncate`, `break-words`), empty arrays, and numerical spikes (`tabular-nums`). |
| [ ] | **4. Tactile Response** | Buttons and clickables have `active:scale-[0.98]` and distinct hover/focus/disabled states (`disabled:opacity-50 disabled:pointer-events-none`). |
| [ ] | **5. Semantic Tokens** | No hardcoded hex or raw Tailwind colors (`bg-blue-600` ❌ $\rightarrow$ `bg-primary` ✅). Dark mode contrast is balanced. |
| [ ] | **6. Responsive Modularity** | Cards and nested panels behave properly in narrow layouts via `@container` or defensive flex-wrapping. |

If any check fails, fix it immediately before returning code.

---

## Reference Manuals Index

When tackling specific areas, read the corresponding in-depth guide:

1. **[01-design-taste-archetypes.md](./references/01-design-taste-archetypes.md)**: Aesthetic archetypes, typography scale, color tokens, and anti-slop rules.
2. **[02-component-architecture.md](./references/02-component-architecture.md)**: Compound components, polymorphism, CVA, container queries, and React 19 / RSC rules.
3. **[03-shadcn-ui-guide.md](./references/03-shadcn-ui-guide.md)**: Customizing shadcn beyond defaults, Tailwind v4 `@theme`, custom variants.
4. **[04-base-ui-guide.md](./references/04-base-ui-guide.md)**: `@base-ui-components/react` (Base UI) unstyled primitives & data-attributes styling.
5. **[05-icon-system.md](./references/05-icon-system.md)**: Icon sizing grid, stroke rules, alignment, and accessibility.
6. **[06-motion-microinteractions.md](./references/06-motion-microinteractions.md)**: Spring physics, `layoutId` transitions, and the 100ms feel.
7. **[07-state-ux-polish.md](./references/07-state-ux-polish.md)**: 5 UI States, loading skeletons, actionable empty states, and error recovery.
8. **[08-senior-component-catalog.md](./references/08-senior-component-catalog.md)**: Full anatomy, API specs, and accessibility checklist for all major UI components.

---

## Production Examples Index

Refer to ready-to-use production implementations in `examples/`:
- **[button.tsx](./examples/button.tsx)**: Polymorphic Button with CVA, loading spinner, tactile press, and icon slots.
- **[input-group.tsx](./examples/input-group.tsx)**: Input with prefix/suffix adornments, `⌘K` badge, and clear button.
- **[card-compound.tsx](./examples/card-compound.tsx)**: Compound Card with `@container` container query and surface tokens.
- **[metric-card.tsx](./examples/metric-card.tsx)**: Metric Stat Card with live radar ping, `font-mono tabular-nums`, and trend badge.
- **[status-badge.tsx](./examples/status-badge.tsx)**: CVA Status Badge with animated radar pulse dot.
- **[base-ui-dialog.tsx](./examples/base-ui-dialog.tsx)**: Headless Base UI Dialog modal with backdrop blur & spring transitions.
- **[animated-tabs.tsx](./examples/animated-tabs.tsx)**: Framer Motion tab slider with `layoutId` active pill.
- **[command-menu.tsx](./examples/command-menu.tsx)**: Command Palette (`⌘K`) with keyboard traversal and group shortcuts.
