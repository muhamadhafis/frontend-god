# ⚡ frontend-god

> **Senior Frontend & Design Engineer Skill for AI Agents (React & Next.js)**  
> Transforms AI coding assistants into Staff-level Design Engineers. Eliminates generic "AI Slop" through intentional aesthetic archetypes, composable React architecture, Tailwind CSS v4 & v3 tokens, headless primitives (shadcn/ui & Base UI), optical iconography, spring physics, and 5-state UX polish.

---

## 🎯 Why `frontend-god`?

Most AI coding assistants produce **"AI Slop"**:
- Purple/cyan gradients on generic dark backgrounds.
- 3 identical copy-paste cards in a grid with no visual hierarchy.
- Robotic `transition: all 0.3s ease-in-out` linear animations.
- Missing loading skeletons (causing layout shift) or zero error boundaries.
- Monolithic 400-line JSX files with hardcoded hex colors (`#3b82f6`).

`frontend-god` provides the missing architectural discipline, taste guidelines, and execution protocols that turn AI agents into **Senior Design Engineers**.

---

## 💎 The 8 Golden Commandments

1. **Aesthetic Direction First**: Declare an intentional archetype (*Technical Precision*, *Editorial Modern*, *Warm Minimalist*, or *Neo-Craftsman*).
2. **The Anchor Cadence**: Never render 3 identical cards in a row. Establish an Anchor item with dominant hierarchy.
3. **Composable Architecture & Semantic Tokens**: Use Compound Components, `asChild` polymorphism, and CVA. Zero hardcoded colors.
4. **Container Queries (`@container`)**: Reusable components adapt to their parent wrapper, not just screen width.
5. **Next.js & React 19 Boundaries**: Keep Server Components (RSC) pure; push `'use client'` down to leaves.
6. **Dual Primitives Strategy**: Choose `shadcn/ui` (Radix) for rapid SaaS scaffolding or `Base UI` (`@base-ui-components/react`) for modern unstyled flexibility.
7. **Optical Iconography**: Strict optical sizing (14px text $\rightarrow$ 16px icon) and uniform stroke width (Lucide / Phosphor).
8. **Pre-Flight Delivery Gate**: Agent verifies keyboard a11y, zero-CLS skeletons, and overflow edge cases before delivering code.

---

## 📂 Repository Structure

```text
frontend-god-skills/
├── SKILL.md                          # Main Skill orchestrator (frontmatter, rules, Pre-Flight Gate)
├── README.md                         # Public documentation & installation guide
├── references/
│   ├── 01-design-taste-archetypes.md # 4 Aesthetic archetypes, Anchor Cadence, typography & color tokens
│   ├── 02-component-architecture.md  # Compound patterns, polymorphism (asChild), CVA, Container Queries, RSC
│   ├── 03-shadcn-ui-guide.md         # Customizing shadcn beyond defaults, Tailwind v4 @theme, custom variants
│   ├── 04-base-ui-guide.md           # Base UI (@base-ui-components/react) primitives, data-attributes styling
│   ├── 05-icon-system.md             # Optical sizing, stroke consistency, Lucide & Phosphor rules, a11y
│   ├── 06-motion-microinteractions.md# Spring physics, layoutId tab transitions, 100ms feel, tactile states
│   ├── 07-state-ux-polish.md         # 5 States: loading skeletons, actionable empty states, error boundary, optimistic UI
│   └── 08-senior-component-catalog.md# Full specifications and anatomy for all core UI components
├── examples/
│   ├── button.tsx                    # Polymorphic Button (CVA, loading, icon slots, tactile press)
│   ├── input-group.tsx               # Senior Input with prefix/suffix icons, ⌘K badge, clear button
│   ├── card-compound.tsx             # Context-driven Compound Card with @container & surface layering
│   ├── metric-card.tsx               # Stat Card with live ping dot, font-mono tabular-nums & trend badge
│   ├── status-badge.tsx              # CVA Status Badge with animated radar pulse dot
│   ├── base-ui-dialog.tsx            # Accessible Base UI Dialog primitive styled with Tailwind CSS
│   ├── animated-tabs.tsx             # Framer Motion tab slider with layoutId
│   └── command-menu.tsx              # Command Palette (⌘K) with keyboard traversal & group shortcuts
└── scripts/
    └── install.sh                    # Symlink installer for real-time global agent integration
```

---

## 🚀 Installation & Real-Time Upgrades

### Global Installation (Recommended)
Run the installer script to create a **Live Symbolic Link** to your global agent skills:

```bash
chmod +x scripts/install.sh
./scripts/install.sh --symlink
```

> **⚡ Live Upgrade Advantage**: Because it links directly to your local repository, **any edit, new component, or reference you add in this folder is IMMEDIATELY available to all your AI agents** across your machine without re-running the installer!

### Workspace-Specific Installation
To use this skill exclusively in a single project, copy or symlink it into your project's `.agents/skills/` folder:

```bash
mkdir -p /path/to/my-project/.agents/skills
ln -s /home/der/Documents/development/lab/frontend-god-skills /path/to/my-project/.agents/skills/frontend-god
```

---

## 🛠 Supported Ecosystem

- **Frameworks**: React 19, Next.js 15+ (App Router, Server Actions, RSC)
- **Styling**: Tailwind CSS v4 (`@theme`) & Tailwind CSS v3
- **Component Primitives**: `shadcn/ui` (Radix UI), `@base-ui-components/react` (Base UI from MUI)
- **Iconography**: `lucide-react`, `@phosphor-icons/react`
- **Animation**: `motion` / `framer-motion` (Spring physics, `layoutId`)
- **Variant Engine**: `class-variance-authority`, `clsx`, `tailwind-merge`

---

## 📄 License
MIT © 2026. Built with craftsmanship for the next generation of AI-assisted engineering.
