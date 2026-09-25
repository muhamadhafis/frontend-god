# Reference 08: Senior UI Component Catalog & Specifications

> **The Blueprint of World-Class Primitives.**  
> This catalog details the architecture, props contract, accessibility requirements, text brevity limits, color discipline, and edge-case behavior for the 8 core components of any high-end React/Next.js design system.

---

## 1. Button (Polymorphic, Tactile & Composable)
- **Path**: `examples/button.tsx`
- **Core Capabilities**:
  - `asChild` support (renders as Next.js `<Link>` without invalid nested markup).
  - CVA Variants: `default`, `secondary`, `outline`, `ghost`, `destructive`, `minimal`, `glow`.
  - Sizes: `xs`, `sm`, `md`, `lg`, `icon`.
  - Built-in `isLoading` state (swaps icon for accessible spinner, sets `aria-busy="true"` and `aria-disabled="true"`).
  - Slots: `leftIcon`, `rightIcon` with optical sizing (`size-4 shrink-0`).
  - Tactile interaction: `active:scale-[0.98]` and `focus-visible:ring-2 focus-visible:ring-offset-2`.

---

## 2. InputGroup (Adorned, Contextual & Accessible)
- **Path**: `examples/input-group.tsx`
- **Core Capabilities**:
  - Seamless unified border wrapping input + prefix/suffix icons or badges.
  - Prefix support (e.g. `$`, `https://`, search icon).
  - Suffix support (e.g. keyboard shortcut badge `⌘K`, clear input button `✕`, password visibility toggle).
  - `focus-within:ring-2 focus-within:ring-ring` on the container so the whole group illuminates together.
  - Native error attachment via `aria-invalid` and `aria-describedby`.

---

## 3. Compound Card with Container Queries (`@container`)
- **Path**: `examples/card-compound.tsx`
- **Core Capabilities**:
  - Compound architecture: `<Card>`, `<Card.Header>`, `<Card.Title>`, `<Card.Description>`, `<Card.Content>`, `<Card.Footer>`, `<Card.Action>`.
  - Responsive via CSS Container Queries (`@container`): adapts based on parent width, not viewport width.
  - Surface Layering token support (`surface-1`, `surface-2`).
  - Subtle interactive state option (`hover:border-border hover:shadow-md cursor-pointer`).
- **Text & Color Discipline Enforcement**:
  - **Description Limit**: Max 1 short sentence ($\le 12$ words).
  - **Zero Redundancy**: If `Card.Content` contains an interactive demo, metric, or code block, omit `Card.Description` completely.
  - **Monochromatic Icons**: Icons inside cards must use neutral styling (`text-muted-foreground`) or the single primary brand color (`text-primary`). **Zero rainbow colors** (no arbitrary purple, green, yellow icon boxes).

---

## 4. Metric / Stat Card (Live Data & Stable Numerals)
- **Path**: `examples/metric-card.tsx`
- **Core Capabilities**:
  - Live pulse indicator (animated radar ping dot with single primary accent or green status).
  - Numerals formatted with `font-mono tabular-nums tracking-tight` (prevents horizontal layout jitter on re-renders).
  - Trend badge with optical directional arrows (`+12.4%`, `-3.2%`).
  - Optional mini sparkline chart or progress delta bar.
  - **Text Brevity**: Micro-labels only (e.g. *"P99 LATENCY"*, *"DAILY RUNS"*); no multi-sentence explanations.

---

## 5. StatusBadge (CVA State Tokens)
- **Path**: `examples/status-badge.tsx`
- **Core Capabilities**:
  - Semantic CVA variants: `success`, `warning`, `error`, `info`, `neutral`, `subtle`.
  - Animated live radar ping dot option (`relative flex size-2`).
  - Micro-size options (`sm`, `md`, `lg`).
  - Matte, subtle background with high-contrast text to prevent neon AI slop.
  - **Usage Isolation**: Reserved strictly for boolean system state indicators, not general card decoration.

---

## 6. Base UI Dialog Modal (Unstyled Headless Primitive)
- **Path**: `examples/base-ui-dialog.tsx`
- **Core Capabilities**:
  - Built with `@base-ui-components/react/dialog`.
  - Accessible backdrop with smooth blur (`backdrop-blur-sm bg-black/40`).
  - Spring-driven scale-in (`data-[state=open]:zoom-in-95`) and fade transitions.
  - Automatic focus trapping, ESC key dismiss, and scrollbar layout-shift prevention.

---

## 7. Animated Sliding Tabs (Framer Motion `layoutId`)
- **Path**: `examples/animated-tabs.tsx`
- **Core Capabilities**:
  - Active capsule pill indicator animated smoothly via Framer Motion's `layoutId`.
  - Snappy spring physics (`stiffness: 450, damping: 32`).
  - Full keyboard accessibility: Arrow Left / Arrow Right navigation, Home / End keys.
  - Micro-padding container with blurred background.

---

## 8. Command Palette (`⌘K` Menu)
- **Path**: `examples/command-menu.tsx`
- **Core Capabilities**:
  - Global keyboard listener (`⌘K` on Mac, `Ctrl+K` on Windows/Linux).
  - Search input with auto-focus and instant fuzzy filtering.
  - Categorized action groups (Navigation, Quick Actions, Settings).
  - Keyboard traversal (Arrow Up/Down, Enter to execute).
  - Apple/Linear style keyboard shortcut badges (`<kbd className="rounded border px-1.5 py-0.5 text-[10px] font-mono">⌘P</kbd>`).
