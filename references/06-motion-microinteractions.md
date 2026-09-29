# Reference 06: Motion, Micro-Interactions & The "100ms Feel"

> **Animation Should Feel Physical, Not Algorithmic.**  
> AI-generated interfaces either have zero animation or apply robotic `transition: all 0.3s ease-in-out` indiscriminately. A Senior Design Engineer applies spring physics, shared layout transitions, and tactile micro-interactions that make an interface feel responsive within 100 milliseconds.

---

## 1. Physics-Based Motion (Springs vs Easings)

Linear or standard bezier easings feel mechanical. Natural UI motion behaves like an engineered physical spring:

### Recommended Spring Configurations:
```typescript
// Rapid, snappy feedback (buttons, tabs, switches, toggles)
export const snappySpring = {
  type: "spring",
  stiffness: 500,
  damping: 35,
  mass: 1,
};

// Smooth, fluid transitions (modals, drawers, expanding cards)
export const fluidSpring = {
  type: "spring",
  stiffness: 350,
  damping: 30,
  mass: 1,
};

// Gentle, subtle presence (tooltips, small popovers)
export const gentleSpring = {
  type: "spring",
  stiffness: 400,
  damping: 28,
};
```

---

## 2. Shared Layout Transitions with `layoutId`

The gold standard of navigation polish is the **Sliding Capsule / Pill** indicator. Instead of abruptly toggling active classes, use Framer Motion's `layoutId` to smoothly glide the indicator between tabs:

```tsx
"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const tabs = ["Overview", "Deployments", "Analytics", "Settings"];

export function SlidingTabs() {
  const [activeTab, setActiveTab] = React.useState(tabs[0]);

  return (
    <div className="flex items-center gap-1 rounded-xl border border-border/50 bg-muted/40 p-1 backdrop-blur-sm">
      {tabs.map((tab) => {
        const isActive = activeTab === tab;
        return (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              "relative rounded-lg px-3.5 py-1.5 text-xs font-medium transition-colors",
              isActive ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"
            )}
          >
            {isActive && (
              <motion.div
                layoutId="activeTabPill"
                className="absolute inset-0 rounded-lg bg-background shadow-sm border border-border/40"
                transition={{ type: "spring", stiffness: 450, damping: 32 }}
              />
            )}
            <span className="relative z-10">{tab}</span>
          </button>
        );
      })}
    </div>
  );
}
```

---

## 3. The "100ms Feel" (Tactile Polish Checklist)

1. **Button Micro-Depression**:
   Interactive buttons should give tactile visual feedback on click:
   `active:scale-[0.98]` or `active:scale-[0.97]`.
2. **Tooltip Entry Delay**:
   Never show tooltips instantly on hover, as they clutter the screen when moving the mouse across elements. Always add a `150ms - 200ms` delay before appearance, and an instant exit on mouse leave.
3. **Scrollbar Gutter Preservation on Modals**:
   When a modal opens, locking the body scroll often removes the browser scrollbar, causing the whole page to shift 15px to the right. Use CSS `scrollbar-gutter: stable` or let Base UI / Radix apply scroll compensation automatically.
4. **Staggered Children**:
   When rendering lists or card grids on initial load, stagger the items slightly (`staggerChildren: 0.04s`) with a subtle fade-up (`y: 8 -> y: 0`) to guide visual flow.

---

## 4. Respecting `prefers-reduced-motion`

Always ensure animations can be gracefully skipped by users with motion sensitivities:

```tsx
// In Framer Motion:
import { useReducedMotion } from "framer-motion";

export function AccessibleCard() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
    />
  );
}

// In Tailwind CSS:
// <div className="transition-transform duration-200 motion-reduce:transition-none motion-reduce:transform-none" />
```

---

## 5. Tailwind CSS Border-Radius Hover Transition Formula

> **Why standard `transition` fails on `rounded-*`**:  
> Tailwind CSS's default `transition` class only targets `color`, `background-color`, `border-color`, `opacity`, `shadow`, and `transform`. **It explicitly excludes `border-radius`.**

### The Required Tailwind Class Chain for Rounded Hover Morphing:

```tsx
// ❌ WRONG (border-radius pops instantly without animation):
<button className="rounded-lg hover:rounded-full transition duration-300">
  Click me
</button>

// ✅ CORRECT (liquid-smooth radius interpolation + zero content bleed):
<button className="rounded-lg hover:rounded-full transition-all duration-300 ease-out overflow-hidden">
  Click me
</button>
```

### Key Technical Pillars:
1. `transition-all`: Forces Tailwind/CSS to include `border-radius` in the transition property matrix.
2. `duration-300`: Standard 300ms duration allows human eyes to track the pill morph smoothly.
3. `ease-out`: Decelerates near completion for a natural physical feel.
4. `overflow-hidden`: Clips child content and background layers during border radius interpolation.

