# Reference 05: Iconography System & Optical Alignment

> **Icons Are Visual Punctuation, Not Wallpapers.**  
> AI coding outputs frequently suffer from "Icon Soup": every heading, bullet point, and card gets an inconsistent, oversized, brightly-colored icon. A Senior Design Engineer applies icons with strict optical sizing, uniform stroke weight, and precise accessibility semantics.

---

## 1. Icon Library Standards

- **Primary Standard**: **Lucide React** (`lucide-react`)  
  *Best for*: General SaaS, shadcn/ui ecosystems, clean modern interfaces.
- **Editorial / Technical Alternative**: **Phosphor Icons** (`@phosphor-icons/react`)  
  *Best for*: Editorial, Linear-grade apps, rich micro-detail weight systems (`thin`, `light`, `regular`, `bold`, `duotone`).

### The Golden Rule of Uniformity:
> **NEVER mix icon families or stroke weights in the same view.**  
> If you choose Lucide with `strokeWidth={1.75}`, all icons across the product must share that weight. Mixing a 2.5px heavy Lucide icon with a thin 1px outline icon destroys visual cohesion.

---

## 2. Optical Sizing Grid (Icon-to-Text Ratio)

Icons should never match the font-size 1:1; because vector icons have empty whitespace inside their bounding boxes, they must be slightly larger than their adjacent text to achieve optical balance:

| Text Class | Text Size | Optical Icon Size | Tailwind Icon Class | Usage |
| :--- | :--- | :--- | :--- | :--- |
| `text-[11px]` | 11px | 13px - 14px | `size-3.5` (`w-3.5 h-3.5`) | Badges, micro-labels, status tags |
| `text-xs` | 12px | 14px - 15px | `size-3.5` or `size-[15px]` | Metadata, captions, secondary timestamps |
| `text-sm` | 14px | 16px | `size-4` (`w-4 h-4`) | **Standard button text, navigation items, inputs** |
| `text-base` | 16px | 18px - 20px | `size-5` (`w-5 h-5`) | Large buttons, callout banners |
| `text-lg` | 18px | 20px - 22px | `size-5.5` or `size-6` | Section headers, card titles |
| `text-2xl` | 24px | 24px - 28px | `size-6` or `size-7` | Hero feature highlights |

---

## 3. Optical Alignment & Layout Hygiene

Always use `inline-flex items-center gap-1.5` or `gap-2` with `shrink-0` on the icon:

```tsx
// ❌ AI Slop: icon shrinks when text wraps, uneven baseline
<button className="flex">
  <IconArrowRight />
  <span>Submit your application here</span>
</button>

// ✅ Senior Craft: shrink-0 prevents distortion, optical gap & baseline alignment
<button className="inline-flex items-center justify-center gap-2 rounded-lg text-sm font-medium">
  <IconArrowRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
  <span>Submit your application</span>
</button>
```

---

## 4. Accessibility (a11y) Semantics

### A. Decorative Icons (Paired with Text)
When an icon is accompanied by visible text, it is decorative and MUST be hidden from screen readers:
```tsx
import { Sparkles } from "lucide-react";

<span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
  <Sparkles className="size-3.5 shrink-0 text-amber-500" aria-hidden="true" />
  <span>AI Assisted</span>
</span>
```

### B. Interactive Icon-Only Buttons
When an action has no text (e.g., search icon, close button, theme toggle), it MUST provide an accessible label:
```tsx
import { Search } from "lucide-react";

// Option 1: aria-label directly on button
<button
  type="button"
  aria-label="Open search palette"
  className="inline-flex size-8 items-center justify-center rounded-md border border-border/60 hover:bg-accent"
>
  <Search className="size-4 text-muted-foreground" aria-hidden="true" />
</button>

// Option 2: VisuallyHidden text (better for internationalization)
<button type="button" className="...">
  <Search className="size-4" aria-hidden="true" />
  <span className="sr-only">Open search palette</span>
</button>
```

---

## 5. Curing "Icon Soup"

- **Do NOT** put an icon on every dropdown item, navigation link, or feature bullet unless it serves functional recognition (e.g., file types `.pdf`, `.tsx`).
- In menus, use icons for primary actions (Edit, Duplicate, Delete), but keep passive navigation clean and typographic.
- Let whitespace and typographic weight do the heavy lifting.
