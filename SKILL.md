---
name: frontend-god
description: "Senior Frontend & Design Engineer skill for React & Next.js. Crafts non-AI-slop interfaces, reusable compound components, shadcn/ui & Base UI integrations, optical iconography, spring motion, container queries, section layout choreography, and 5-state UX polish."
allowed-tools: Read Write Edit Glob Grep
---

# frontend-god

> **Senior Frontend & Design Engineer Skill (Staff Level)**  
> Transforms AI coding agents into world-class design engineers. Eliminates generic "AI Slop" by enforcing intentional aesthetic archetypes, composable React architecture, Tailwind CSS v4 & v3 token mastery, headless primitives (shadcn/ui & Base UI), optical iconography, tactile motion, extreme text restraint, single-accent color discipline, asymmetric section layout choreography, and forensic benchmarks from the world's 10 highest-craft software companies: **Linear, Vercel, Stripe, Resend, Cursor, Mercury, Ramp, Attio, PostHog, and Anthropic**.

---

## When to Activate This Skill

Activate this skill whenever:
- Designing, building, or refactoring user interfaces, web applications, or landing pages in **React** or **Next.js**.
- Creating reusable UI components, design systems, or component libraries.
- Integrating or customizing **shadcn/ui** or **@base-ui-components/react (Base UI)**.
- Structuring landing page sections, bento grids, and feature placement choreography.
- Implementing layouts, animations (Framer Motion / Motion), or dark/light theming.
- Auditing existing frontend code to eliminate AI slop, layout shift, or accessibility issues.

---

## Style Signature Selection Protocol

Before writing any markup, align with one of the 10 Gold Standard Style Signatures (or let the product's brand dictate it). **Once chosen, DO NOT MIX styles**:

| Style Signature | Benchmark Identity | Key Visual Formula |
| :--- | :--- | :--- |
| **Linear (Orbiter)** | High-precision dev tool, calm dark | `#08090a` canvas, `#5e6ad2` accent, hairline moonlight borders (`rgba(255,255,255,0.07)`), Inter `cv01/ss03` weight 510, Geist Mono. |
| **Vercel (Geist)** | Compiler-grade monochrome restraint | `#000000` canvas, `#ffffff` ink, shadow-as-border (`0 0 0 1px rgba(255,255,255,0.08)`), blueprint gridlines, Geist tracking `-2.4px`. |
| **Stripe (Söhne)** | Fintech authority & twilight depth | Deep navy `#0a2540` canvas, blurple `#635bff` accent, lightweight display headlines (300–400), multi-layer twilight shadows. |
| **Resend (Domaine)** | Pure black speed & "One Loud Element" | Pure black `#000000`, Domaine Display serif headline, green `#00c16a` status dot, whisper-quiet micro controls. |
| **Cursor (Warm)** | Warm minimalism & real code editor | Warm paper `#f7f7f4`, dark ink `#26251e`, Cursor Orange `#f54e00`, Waldenburg Gothic, real code editor hero above fold. |
| **Mercury (Luxury)** | Warm luxury editorial fintech | Cream `#d7c3af` canvas, bespoke 480 weight, 1.625 leading, calm software-first tables. |
| **Ramp & Attio (CRM)** | Soft dark & high-density data tables | Soft slate `#0c0e12`, 36px high-density tables, hairline semi-transparent borders. |
| **PostHog (Product)** | Real interactive telemetry above fold | Dense interactive charts embedded directly in hero section, sharp retro-modern badges. |
| **Anthropic (Editorial)** | Intellectual research & safety | Slate Ink `#141413` and Ivory Cream `#faf9f5` full-bleed band alternation, Instrument Serif 80px display, generous whitespace. |
| **Raycast (Desktop)** | Keyboard-first desktop instrument | Blue-black `#07080a`, Raycast Red `#ff6363` accent, inset glass highlights (`box-shadow: inset 0 1px 0 0 rgba(255,255,255,0.06)`), ⌘K action panel. |

📖 *Deep dive: [09-gold-standard-style-signatures.md](./references/09-gold-standard-style-signatures.md)*

---

## The 16 Golden Commandments of Frontend God

Every interface and component built under this skill MUST obey these sixteen non-negotiable rules:

### 1. Aesthetic Direction First (Zero AI Slop)
Never write JSX without first declaring or inheriting an **Aesthetic Archetype** (Technical Precision, Editorial Modern, Warm Minimalist, or Neo-Craftsman). Reject generic AI tells:
- ❌ **FORBIDDEN**: Random blue-purple gradients, generic cyan radial hero glows, pill buttons on every single element, 3 identical cards in a row.
- ✅ **REQUIRED**: Intentional color palette (60-30-10 rule), Surface Layering (`surface-0`, `surface-1`, `surface-2`), and high-contrast intentional borders (`border-border/40`).
- 📖 *Deep dive: [01-design-taste-archetypes.md](./references/01-design-taste-archetypes.md)*

### 2. The Anchor Cadence (Break Visual Monotony)
In any grid or dashboard section, **never render identical copy-paste cards**.
- One item MUST serve as the **Anchor** (e.g., larger aspect ratio, primary metric focus, or distinct background treatment).
- Secondary items must have subordinate hierarchy. Vary rhythm, height, or density deliberately.
- 📖 *Deep dive: [01-design-taste-archetypes.md](./references/01-design-taste-archetypes.md#2-the-anchor-cadence-rule-break-visual-monotony)*

### 3. Composable Architecture & Semantic Tokens
- Build components using **Compound Components** (`<Card.Header>`, `<Card.Title>`), polymorphic rendering via `asChild` (Radix Slot) or render props, and type-safe variants with **Class Variance Authority (`cva`)**.
- **Zero Hardcoded Colors**: Never write arbitrary colors like `bg-blue-600` or `#1e293b`. All colors must route through semantic CSS tokens (`bg-primary`, `text-muted-foreground`, `border-border`).
- 📖 *Deep dive: [02-component-architecture.md](./references/02-component-architecture.md)*

### 4. Container Queries for True Modularity
Reusable components (cards, widgets, inputs) must not rely solely on viewport `@media` breakpoints (`md:`, `lg:`). Use **CSS Container Queries** (`@container`, `@sm:`, `@md:`) so components adapt intelligently whether placed in a full-width grid, a modal, or a 320px sidebar.
- 📖 *Deep dive: [02-component-architecture.md](./references/02-component-architecture.md#4-container-queries-for-modular-components-container)*

### 5. Next.js App Router & React 19 Boundaries
- Keep components as **React Server Components (RSC)** by default.
- Push `'use client'` down to the smallest interactive leaf nodes.
- Use `useOptimistic` for instant feedback and `useTransition` for non-blocking UI updates.
- 📖 *Deep dive: [02-component-architecture.md](./references/02-component-architecture.md#5-nextjs-app-router--react-19-discipline)*

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
- **Button Hover Pill Morphing Rule**: Action buttons MUST morph smoothly from standard system radii (`rounded-lg` / `rounded-md`) into a `hover:rounded-full` shape on hover using `transition-all duration-300 ease-out`.
- 📖 *Deep dive: [06-motion-microinteractions.md](./references/06-motion-microinteractions.md) & [07-state-ux-polish.md](./references/07-state-ux-polish.md)*

### 9. Extreme Text Restraint & High-Velocity Scannability (Zero Wall-of-Text)
**UI is an interactive software cockpit, NOT a corporate marketing essay.**
- ❌ **FORBIDDEN**: Multi-sentence paragraphs (3–4 lines) filling every card and section. Generic AI filler phrases (*"designed to seamlessly integrate with your existing workflow"*). Dense event log stream wall-of-text or clutter footers (`v2.4.0 LTS • Python 3.12`) inside Hero cockpits when headlines already state the core purpose.
- ✅ **REQUIRED**:
  - **Section Subtitles**: Maximum **1 concise sentence** ($\le 16$ words) or omitted completely if the heading is self-explanatory.
  - **Card Descriptions**: Maximum **1 short sentence or punchy fragment** ($\le 12$ words).
  - **Visual / Code / Metric Cards**: **0 sentence descriptions**! Let the live interactive preview, the metric numeral, or the code snippet speak for itself. Use micro-labels (2–3 words) instead of full prose.
  - **Cockpit Visual Restraint**: Keep illustrations and cockpits clean, minimal, and focused on 1 core mechanism without cluttering logs or extra metric boxes.
- 📖 *Deep dive: [01-design-taste-archetypes.md](./references/01-design-taste-archetypes.md#6-the-law-of-text-restraint--high-velocity-scannability)*

### 10. Strict Single-Accent Palette & Monochromatic Icon Discipline (Anti-Rainbow)
**Never turn an interface into a multi-colored carnival.**
- ❌ **FORBIDDEN (The Rainbow Icon Pattern)**: Giving each card a different colored icon wrapper (e.g. Card 1 blue, Card 2 green/emerald, Card 3 amber, Card 4 purple).
- ✅ **REQUIRED**:
  - **Single Primary Accent**: If the product's primary color is **Blue**, all primary highlights, focal card badges, and active tab indicators MUST BE **Blue**.
  - **Neutral-First Icons**: All standard icons inside feature cards, navigation links, and lists MUST be neutral (`text-muted-foreground` or `text-foreground/80`) by default.
  - **Isolated Semantic Status**: Colors like `emerald-500` (green), `rose-500` (red), or `amber-500` (yellow) are **STRICTLY RESERVED** for actual boolean system states (Build PASS/FAIL, Git Diff `+`/`-`, System Online/Offline), NEVER as decorative card cosmetics.
- 📖 *Deep dive: [01-design-taste-archetypes.md](./references/01-design-taste-archetypes.md#7-the-single-accent--monochromatic-discipline) & [05-icon-system.md](./references/05-icon-system.md#6-icon-color-discipline-neutral-first--anti-rainbow-rules)*

### 11. Distinct Typographic Identity & OpenType Precision
**Reject unstyled, default system fonts.**
- Apply OpenType stylistic sets: `cv01` & `ss03` on Inter for curved technical glyphs, or use curated fonts: **Geist**, **Instrument Serif**, **Plus Jakarta Sans**, or **Cabinet Grotesk**.
- Large display headlines MUST use optical negative tracking (`tracking-[-0.035em]` or `-1.5px` to `-3px`) and tight line-height (`leading-none` or `leading-[1.1]`) to create compressed, authoritative title blocks.
- 📖 *Deep dive: [01-design-taste-archetypes.md](./references/01-design-taste-archetypes.md#8-the-opentype-typography-precision-matrix)*

### 12. The Macro vs Micro Spacing Engine (Dynamic Rhythm)
**Eliminate rigid, uniform spacing (`p-6` everywhere).**
- Enforce the **Extreme Contrast Spacing Law**:
  - **Macro Sections**: Expansive breathing room (`py-24` to `py-36` on desktop).
  - **Micro Wells**: Compact, high information density (`p-2.5` to `p-3.5` with tight `gap-1.5`).
- 📖 *Deep dive: [01-design-taste-archetypes.md](./references/01-design-taste-archetypes.md#9-the-macro-vs-micro-spacing-engine)*

### 13. Haram Bikin Ulang Roda (Leverage Headless Primitives)
**Never hand-craft fragile, custom `div` dropdowns, custom select pickers, or custom modals from scratch.**
- ❌ **FORBIDDEN**: Hand-coding custom `div` dropdowns that lack keyboard navigation (`ArrowUp`/`ArrowDown`/`Escape`), focus trapping, screen-reader semantics, and collision repositioning.
- ✅ **REQUIRED**: Leverage rich shadcn/ui and Base UI primitives:
  - Scrollable & grouped select viewports (`SelectGroup`, `SelectScrollUpButton`).
  - Searchable comboboxes and multi-select via `Popover` + `Command` (cmdk).
  - Nested submenus (`DropdownMenuSub`) and shortcut badges (`<kbd>`).
  - Global Keyboard Shortcut Listeners: `⌘K` / `Ctrl+K` triggers must use global `window.addEventListener('keydown', ...)` with toggle state logic (`onToggle`).
  - Responsive modals: Desktop `<Dialog>` $\rightarrow$ Mobile bottom-sheet `<Drawer>` via `useMediaQuery`.
  - Base UI `NumberField` and `OTPField` for bulletproof form ergonomics.
- 📖 *Deep dive: [03-shadcn-ui-guide.md](./references/03-shadcn-ui-guide.md) & [04-base-ui-guide.md](./references/04-base-ui-guide.md)*

### 14. Haram Ping Dot Dekoratif, Pill Badge Klise ✨ & Kicker Pseudo-Cyberpunk (// Slop)
**Eliminate cosmetic radar pings, interior status dots, floating emoji pill badges, and robotic double-slash kickers.**
- ❌ **FORBIDDEN**:
  - Interior status dots (`<span className="size-1.5 rounded-full bg-emerald-400" />`) inside status badges or pill labels.
  - Slapping `animate-ping` radar circles onto static marketing cards.
  - Floating pill badges with `✨ New` or `AI-Powered` above headlines.
  - Pseudo-cyberpunk uppercase kickers: `<div ...>NEXT-GEN AGENTIC CODING</div>` or `<span ...>CORE ARCHITECTURE // HARDWARE ACCELERATED AGENTS</span>`.
  - Double slashes (`//`, `///`, `::`) inside titles or section labels.
- ✅ **REQUIRED**:
  - **Clean Status Badges**: Use border and background tint murni (`border border-emerald-500/30 bg-emerald-500/10 text-emerald-400`) without interior dots.
  - **Confident Headline First**: High-craft products (Linear, Vercel, Apple) let the headline lead directly without unnecessary kicker clutter.
  - **Natural Category Eyebrow**: If taxonomy is genuinely needed, use natural title-cased sans-serif without slashes:
    ```tsx
    <span className="text-xs font-semibold text-primary">Architecture</span>
    <h2 className="text-3xl font-semibold tracking-tight text-foreground mt-2">
      State synchronization at the planetary edge.
    </h2>
    ```
- 📖 *Deep dive: [01-design-taste-archetypes.md](./references/01-design-taste-archetypes.md#11-anti-cyberpunk-kicker--headline-confidence-rules)*

### 15. Haram Theme Toggle Tanpa Izin (Komit pada Satu Atmosfer Native)
**Stop slapping sun/moon theme switchers onto every navbar.**
- ❌ **FORBIDDEN**: Inserting a theme toggle into navigation bars by default. It signals design indecision.
- ✅ **REQUIRED**: Commit to the chosen product atmosphere (e.g. Linear is natively dark, Mercury is natively warm cream, Vercel is monochrome). Only add theme switching when the user explicitly requests light/dark mode support.
- 📖 *Deep dive: [09-gold-standard-style-signatures.md](./references/09-gold-standard-style-signatures.md)*

### 16. Haram 3-Column Card Slop (Terapkan Asymmetric Layout Choreography & Alternating Section Cadence)
**Never fill every section with 3 identical cards (`grid-cols-3`). Frame sections as full-viewport focused experiences with alternating layout rhythm.**
- ❌ **FORBIDDEN**: Repeating `grid-cols-3` with identical icon, title, and 3-line description across every section.
- ✅ **REQUIRED**:
  - **Full-Viewport Section Framing (`min-h-screen`)**: Each landing page section MUST use `min-h-screen flex flex-col justify-center py-20 lg:py-0` layout framing so 1 section fills the full device viewport when scrolled into view.
  - **Alternating Layout Cadence**:
    - **Section 1 (Hero)**: Top-Down Stacked (Centered Text Top $\rightarrow$ Centered Cockpit Visual Bottom).
    - **Section 2**: Left (Ilustrasi / 70% Anchor Card) $\rightarrow$ Right (Teks Header & Secondary Stacked Cards).
    - **Section 3**: Left (Teks Header & Surface Selection Tabs) $\rightarrow$ Right (Ilustrasi Interactive Workbench).
    - **Section 4**: Left (Ilustrasi Visual Security Sandbox Gauge) $\rightarrow$ Right (Teks Header & Specs Ledger Table).
- 📖 *Deep dive: [10-section-layout-choreography.md](./references/10-section-layout-choreography.md)*

### 17. Strict Monospace Containment (Font-Mono Hanya untuk Mesin & Kode Riil)
**`font-mono` is a technical tool, not a design cosmetic.**
- ❌ **FORBIDDEN**: Using `font-mono` on regular labels, version indicators (`v3.2`), list numbers (`01`, `02`), subtitles, and dates to look "technical".
- ✅ **REQUIRED**:
  - `font-mono` is **STRICTLY RESERVED** for: CLI / Terminal snippets (`$ npm ...`), code blocks, keyboard shortcuts (`<kbd>⌘K</kbd>`), commit SHAs / UUIDs, and tabular financial/telemetry numbers (`tabular-nums font-mono`).
  - Versions, list numbers, category eyebrows, and subtitles **MUST use standard proportional sans-serif (`font-sans`) or serif (`font-serif`)**.
- 📖 *Deep dive: [01-design-taste-archetypes.md](./references/01-design-taste-archetypes.md#10-the-strict-monospace-containment-law)*

### 18. Arsitektur Floating Pill Navbar & Modern Footer (Standar Vercel, Linear & Oversized Wordmark Pattern)
**Frame the product with architectural restraint, poise, and editorial closure.**
- ✅ **Floating Pill Navbar**: Floating centered inset header (`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl rounded-full border border-border/40 bg-background/85 backdrop-blur-xl px-4 py-2 flex items-center justify-between`), quiet pill nav links (`hover:text-foreground hover:bg-muted/40 rounded-full px-3 py-1`), subtle `⌘K` search shortcut trigger, single solid primary CTA, and zero theme-toggle clutter.
- ✅ **Modern Footer**: Multi-column architectural grid (Product, Platform, Resources, Company, Legal), quiet sans-serif links, live operational status indicator (`border border-emerald-500/30 bg-emerald-500/10 text-emerald-400` + "All systems normal" - **NO interior dot slop & NO `animate-ping`**), and **Oversized Brand Wordmark** (`text-[13vw] font-bold tracking-tighter text-foreground/[0.06]`) for a grounded, editorial closure.
- 📖 *Deep dive: [10-section-layout-choreography.md](./references/10-section-layout-choreography.md#6-arsitektur-navbar--footer-modern-standar-vercel--linear)*

### 19. Haram Heavy Drop Shadows (Hukom Murni Floating UI & Zero-Shadow Law)
**Heavy drop shadows in modern dark/light mode interfaces are FORBIDDEN AI slop.**
- ❌ **FORBIDDEN**: Applying heavy drop-shadow utilities (`shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`, `shadow-2xl`, `shadow-indigo-600/30`) to floating UI components, buttons, cards, navbars, and modals.
- ✅ **REQUIRED**: Floating components and cards MUST rely exclusively on:
  1. Hairline semi-transparent borders (`border border-white/10` / `border-border/40`).
  2. Elevated surface layering (`bg-[#0c0e12]` over `bg-[#08090a]`).
  3. Crisp backdrop blur (`backdrop-blur-xl`).
  4. Subtle inset highlights if tactile emphasis is required (`box-shadow: inset 0 1px 0 0 rgba(255,255,255,0.06)`).
- 📖 *Deep dive: [01-design-taste-archetypes.md](./references/01-design-taste-archetypes.md#12-zero-drop-shadow-law-haram-heavy-drop-shadows)*

---

## Pre-Flight Delivery Gate (Self-Audit Protocol)

**BEFORE delivering any frontend component or page to the user, you MUST silently verify this 17-point checklist:**

| Check | Item | Verification Criteria |
| :---: | :--- | :--- |
| [ ] | **1. A11y & Focus** | Interactive elements have visible `focus-visible:ring-2 focus-visible:ring-offset-2`. Icon-only buttons have `aria-label`. |
| [ ] | **2. Zero CLS Skeleton** | Loading skeletons mirror the exact dimensions, line counts, and padding of loaded content. |
| [ ] | **3. Edge Case Stress** | Tested with long overflowing strings (`truncate`, `break-words`), empty arrays, and numerical spikes (`tabular-nums`). |
| [ ] | **4. Tactile Response** | Buttons and clickables have `active:scale-[0.98]` and distinct hover/focus/disabled states. |
| [ ] | **5. Semantic Tokens** | No hardcoded hex or raw Tailwind colors (`bg-blue-600` ❌ $\rightarrow$ `bg-primary` ✅). |
| [ ] | **6. Responsive Modularity** | Cards and nested panels behave properly in narrow layouts via `@container` or defensive flex-wrapping. |
| [ ] | **7. Text Scannability** | **No card has > 1 sentence or > 12 words of description**. No generic filler marketing buzzwords. |
| [ ] | **8. Single-Accent Color** | **Zero rainbow icons**. Icons are neutral-first or match the single primary accent. |
| [ ] | **9. Typographic Identity** | Headlines use tight negative tracking (`tracking-[-0.03em]`); OpenType features or curated fonts applied. |
| [ ] | **10. Dynamic Spacing** | Clear contrast between macro section padding (`py-24+`) and micro inner wells (`p-3`); no uniform `p-6`. |
| [ ] | **11. Headless Primitives** | No fragile hand-rolled `div` dropdowns/selects. Scrollable select, combobox, or Base UI used. |
| [ ] | **12. Zero Slop Micro-Tells** | No interior status dots (`<span className="h-1.5 w-1.5 bg-emerald-400" />`). No `animate-ping` radar circles. No floating `✨` pill badges. |
| [ ] | **13. Native Atmosphere** | No unrequested navbar theme toggles. Single atmosphere committed. |
| [ ] | **14. Asymmetric Layout** | No repetitive 3-column card rows. Section A has Live Cockpit, Section B has 70/30 Anchor Bento. |
| [ ] | **15. Zero Kicker Slop** | No robotic double-slash `//` kickers or buzzword pills above headings. Confident headlines lead directly. |
| [ ] | **16. Monospace Containment**| `font-mono` used strictly in terminal/code/tabular contexts. Versions and list numbers use `font-sans`. |
| [ ] | **17. Zero Drop Shadow Law** | No `shadow-` drop shadow classes on floating components. Rely on hairline borders, backdrop blur, and surface layering. |

If any check fails, fix it immediately before returning code.

---

## Reference Manuals Index

When tackling specific areas, read the corresponding in-depth guide:

1. **[01-design-taste-archetypes.md](./references/01-design-taste-archetypes.md)**: Aesthetic archetypes, typography scale, OpenType matrix, text restraint rules, single-accent discipline, strict monospace containment, and anti-cyberpunk kicker rules.
2. **[02-component-architecture.md](./references/02-component-architecture.md)**: Compound components, polymorphism, CVA, container queries, and React 19 / RSC rules.
3. **[03-shadcn-ui-guide.md](./references/03-shadcn-ui-guide.md)**: Customizing shadcn beyond defaults, scrollable select, cmdk combobox, submenus, responsive drawer.
4. **[04-base-ui-guide.md](./references/04-base-ui-guide.md)**: `@base-ui-components/react` (Base UI) unstyled primitives, NumberField, Autocomplete, data-attributes.
5. **[05-icon-system.md](./references/05-icon-system.md)**: Icon sizing grid, stroke rules, alignment, neutral-first styling, and anti-rainbow rules.
6. **[06-motion-microinteractions.md](./references/06-motion-microinteractions.md)**: Spring physics, `layoutId` transitions, and the 100ms feel.
7. **[07-state-ux-polish.md](./references/07-state-ux-polish.md)**: 5 UI States, loading skeletons, actionable empty states, and error recovery.
8. **[08-senior-component-catalog.md](./references/08-senior-component-catalog.md)**: Full anatomy, API specs, and accessibility checklist for all major UI components.
9. **[09-gold-standard-style-signatures.md](./references/09-gold-standard-style-signatures.md)**: Forensic tokens for 10 Gold Standards (Linear, Vercel, Stripe, Resend, Cursor, Mercury, Ramp, PostHog, Anthropic, Raycast) + Inspiration Vaults.
10. **[10-section-layout-choreography.md](./references/10-section-layout-choreography.md)**: Blueprint of Section A to Section E, Anchor Bento 70/30, Modern Navbar & Footer architecture, and Feature Placement Tree.

---

## Production Examples Index

Refer to ready-to-use production implementations in `examples/`:
- **[button.tsx](./examples/button.tsx)**: Polymorphic Button with CVA, loading spinner, tactile press, and icon slots.
- **[input-group.tsx](./examples/input-group.tsx)**: Input with prefix/suffix adornments, `⌘K` badge, and clear button.
- **[card-compound.tsx](./examples/card-compound.tsx)**: Compound Card with `@container` container query and surface tokens.
- **[metric-card.tsx](./examples/metric-card.tsx)**: Metric Stat Card with `font-mono tabular-nums` and trend badge.
- **[status-badge.tsx](./examples/status-badge.tsx)**: CVA Status Badge with solid state dot.
- **[base-ui-dialog.tsx](./examples/base-ui-dialog.tsx)**: Headless Base UI Dialog modal with backdrop blur & spring transitions.
- **[animated-tabs.tsx](./examples/animated-tabs.tsx)**: Framer Motion tab slider with `layoutId` active pill.
- **[command-menu.tsx](./examples/command-menu.tsx)**: Command Palette (`⌘K`) with keyboard traversal and group shortcuts.
- **[select-advanced.tsx](./examples/select-advanced.tsx)**: Advanced Select with scrollable viewport, group labels, and searchable combobox.
- **[dropdown-advanced.tsx](./examples/dropdown-advanced.tsx)**: Advanced DropdownMenu with submenus, checkboxes, radio groups, and shortcut badges.
- **[navbar-modern.tsx](./examples/navbar-modern.tsx)**: Modern Vercel/Linear-inspired Navbar with backdrop-blur, ⌘K search trigger, and mobile drawer.
- **[footer-modern.tsx](./examples/footer-modern.tsx)**: Modern Vercel/Linear-inspired Multi-Column Footer with live operational status indicator.
