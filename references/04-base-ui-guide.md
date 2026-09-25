# Reference 04: Base UI (@base-ui-components/react) Guide

> **The Next Generation of Unstyled Primitives.**  
> Built by the MUI team, Base UI (`@base-ui-components/react`) is an unstyled, accessible component library engineered specifically for modern CSS workflows. It eliminates the need for external floating-ui dependencies, introduces clean data-attribute state styling, and offers zero-runtime performance.

---

## 1. Why Base UI? (Comparison with Radix / shadcn)

| Feature | Base UI (`@base-ui-components/react`) | shadcn / Radix UI |
| :--- | :--- | :--- |
| **Origin & Maintainer** | MUI Team (designed from scratch for modern CSS) | WorkOS / Radix Team |
| **Anchor Positioning** | Built-in modern anchor positioning with collision logic | Requires Floating UI / Popper wrappers |
| **Styling Philosophy** | Native CSS Data Attributes (`data-[state=open]`, `data-[disabled]`) | Data attributes (`data-[state=open]`) |
| **Bundle Footprint** | Ultra-lean, modular imports | Modular primitives |
| **Form Controls** | Rich modern inputs, sliders, switches, number fields | Standard headless form components |
| **Best Used For** | Floating popovers, tooltips, high-performance unstyled apps | Fast copy-paste SaaS scaffolding with existing shadcn CLI |

---

## 2. Installation & Setup

Install Base UI primitives:
```bash
npm install @base-ui-components/react
```

---

## 3. Styling State with Tailwind CSS Data Attributes

Base UI reflects component states directly into HTML `data-*` attributes. Tailwind CSS v3 and v4 can target these attributes directly:

- `data-[state=open]` / `data-[state=closed]`
- `data-[disabled]`
- `data-[side=top]` / `data-[side=bottom]` / `data-[side=left]` / `data-[side=right]`
- `data-[align=start]` / `data-[align=end]` / `data-[align=center]`

---

## 4. Production Example: Base UI Popover

Notice how clean the anchor positioning and animation classes are:

```tsx
"use client";

import * as React from "react";
import { Popover } from "@base-ui-components/react/popover";
import { cn } from "@/lib/utils";

export function UserProfilePopover({ user }: { user: { name: string; email: string } }) {
  return (
    <Popover.Root>
      <Popover.Trigger
        className={cn(
          "inline-flex items-center gap-2 rounded-lg border border-border/60 bg-card px-3 py-1.5 text-xs font-medium text-foreground",
          "transition-all duration-150 hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          "active:scale-[0.98] data-[state=open]:border-border data-[state=open]:bg-accent"
        )}
      >
        <span>{user.name}</span>
        <span className="text-[10px] text-muted-foreground">▼</span>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Positioner sideOffset={8}>
          <Popover.Popup
            className={cn(
              "z-50 min-w-[220px] rounded-xl border border-border/80 bg-popover p-4 text-popover-foreground shadow-xl backdrop-blur-md",
              // Smooth spring scale-in and fade transitions:
              "transition-all duration-200 ease-out",
              "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
              "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
              // Side offsets:
              "data-[side=bottom]:slide-in-from-top-2",
              "data-[side=top]:slide-in-from-bottom-2"
            )}
          >
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-semibold">{user.name}</p>
              <p className="text-xs text-muted-foreground">{user.email}</p>
            </div>
            
            <div className="my-3 h-px bg-border/50" />
            
            <button className="w-full rounded-md px-2 py-1.5 text-left text-xs font-medium text-destructive hover:bg-destructive/10">
              Sign Out
            </button>
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  );
}
```

---

## 5. Decision Matrix: When to Pick Base UI vs shadcn/Radix

- **Reach for Base UI** when:
  1. You need lightweight, unstyled popovers, tooltips, or dropdowns with top-tier anchor alignment.
  2. You want zero dependency on Radix primitives.
  3. You are building custom design systems where you control every single CSS utility class.
- **Reach for shadcn/Radix** when:
  1. The project already uses `components.json` and standard shadcn UI files.
  2. You want instant out-of-the-box pre-styled components (e.g. Accordions, Command Palettes, Sheet drawers).
  3. You are scaffolding a rapid SaaS dashboard with familiar patterns.
