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
| **Form Controls** | Rich modern inputs: `NumberField`, `OTPField`, `Autocomplete`, `Slider` | Standard headless form components |
| **Bundle Footprint** | Ultra-lean, modular subpath imports | Modular primitives |
| **Best Used For** | Floating popovers, tooltips, complex number steppers, unstyled apps | Fast copy-paste SaaS scaffolding with existing shadcn CLI |

---

## 2. Installation

```bash
npm install @base-ui-components/react
```

---

## 3. Base UI NumberField (Precision Numeric Stepper)

Banyak aplikasi fintech, e-commerce, atau devtools membutuhkan stepper angka dengan validasi, min/max, dan format khusus (misal: jumlah core CPU, limit memori, atau amount uang). Dengan Base UI, kita tidak perlu menulis logic manual:

```tsx
// components/base-ui/number-stepper.tsx
"use client";

import * as React from "react";
import { NumberField } from "@base-ui-components/react/number-field";
import { Minus, Plus } from "lucide-react";

export function CpuCoreStepper() {
  return (
    <NumberField.Root
      defaultValue={4}
      min={1}
      max={64}
      step={1}
      className="flex flex-col gap-1.5 w-48 font-mono"
    >
      <NumberField.Label className="text-[11px] uppercase tracking-widest text-muted-foreground select-none">
        CPU Allocation
      </NumberField.Label>
      
      <NumberField.Group className="flex items-center rounded-lg border border-border/70 bg-card overflow-hidden focus-within:ring-2 focus-within:ring-primary focus-within:border-primary">
        <NumberField.Decrement
          className="flex h-9 w-9 items-center justify-center text-muted-foreground transition-colors hover:bg-muted active:scale-95 disabled:opacity-40 disabled:pointer-events-none"
        >
          <Minus className="size-3.5" />
        </NumberField.Decrement>

        <NumberField.Input
          className="h-9 w-full border-x border-border/50 bg-transparent text-center text-xs font-semibold text-foreground focus:outline-none"
        />

        <NumberField.Increment
          className="flex h-9 w-9 items-center justify-center text-muted-foreground transition-colors hover:bg-muted active:scale-95 disabled:opacity-40 disabled:pointer-events-none"
        >
          <Plus className="size-3.5" />
        </NumberField.Increment>
      </NumberField.Group>
    </NumberField.Root>
  );
}
```

---

## 4. Base UI Autocomplete / Combobox Primitive

Base UI menyediakan primitif `Autocomplete` yang memisahkan logic filter dan keyboard navigation secara bersih:

```tsx
// components/base-ui/autocomplete-picker.tsx
"use client";

import * as React from "react";
import { Autocomplete } from "@base-ui-components/react/autocomplete";
import { Search, Check } from "lucide-react";

const options = [
  { id: "react", label: "React 19" },
  { id: "vue", label: "Vue 3.5" },
  { id: "svelte", label: "Svelte 5" },
  { id: "solid", label: "SolidJS" },
];

export function FrameworkAutocomplete() {
  return (
    <Autocomplete.Root items={options}>
      <div className="relative w-64">
        <div className="relative flex items-center">
          <Search className="absolute left-2.5 size-3.5 text-muted-foreground pointer-events-none" />
          <Autocomplete.Input
            placeholder="Type framework..."
            className="h-9 w-full rounded-lg border border-border/70 bg-card pl-8 pr-3 text-xs text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>

        <Autocomplete.Portal>
          <Autocomplete.Positioner sideOffset={6}>
            <Autocomplete.Popup className="z-50 w-[var(--anchor-width)] rounded-xl border border-border/80 bg-popover p-1 shadow-xl backdrop-blur-md">
              <Autocomplete.List className="max-h-56 overflow-y-auto">
                <Autocomplete.Item
                  className="flex items-center justify-between rounded-md px-2.5 py-1.5 text-xs text-foreground cursor-pointer data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground select-none"
                >
                  <Autocomplete.ItemText />
                  <Autocomplete.ItemIndicator>
                    <Check className="size-3 text-primary" />
                  </Autocomplete.ItemIndicator>
                </Autocomplete.Item>
              </Autocomplete.List>
            </Autocomplete.Popup>
          </Autocomplete.Positioner>
        </Autocomplete.Portal>
      </div>
    </Autocomplete.Root>
  );
}
```

---

## 5. Base UI Popover with Built-in Anchor Collision

Anchor positioning di Base UI tidak memerlukan wrapper pihak ketiga. Cukup tentukan `sideOffset` dan `align`:

```tsx
// components/base-ui/popover-demo.tsx
"use client";

import { Popover } from "@base-ui-components/react/popover";

export function StatusPopover() {
  return (
    <Popover.Root>
      <Popover.Trigger className="inline-flex items-center gap-2 rounded-lg border border-border/70 bg-card px-3 py-1.5 text-xs font-medium text-foreground hover:bg-accent transition-colors data-[state=open]:border-primary">
        <span>Deployment Status</span>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Positioner sideOffset={8} align="end">
          <Popover.Popup className="z-50 min-w-[240px] rounded-xl border border-border/80 bg-popover p-4 text-popover-foreground shadow-2xl backdrop-blur-md data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95">
            <div className="flex flex-col gap-1.5 font-mono text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-border/50">
                <span className="text-muted-foreground">CLUSTER</span>
                <span className="text-emerald-500 font-medium">HEALTHY</span>
              </div>
              <p className="text-[11px] text-muted-foreground pt-1">All 12 edge instances operational with 0 errors.</p>
            </div>
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  );
}
```

---

## 6. Kapan Memilih Base UI vs shadcn/Radix?

- **Pilih Base UI** ketika:
  1. Anda butuh kontrol penuh terhadap styling tanpa bundle Radix yang berat.
  2. Anda butuh input numerik (`NumberField`) atau OTP/PIN picker yang sangat stabil dan unstyled.
  3. Menginginkan sintaks data-attributes native modern (`data-[state=open]`, `data-[highlighted]`).
- **Pilih shadcn/Radix** ketika:
  1. Proyek sudah memiliki setup `components.json` shadcn standar.
  2. Memerlukan integrasi cepat dengan ekosistem `cmdk` dan `vaul` (Drawer).
