# Reference 03: Advanced shadcn/ui Integration & Customization

> **shadcn/ui is a Foundation, Not a Final Aesthetic.**  
> The hallmark of AI slop is copying default shadcn/ui components without modifying their tokens, radius, or variants. A Senior Design Engineer treats shadcn as unstyled raw clay: we customize the color variables, tune the corner radii, add tailored variants, and integrate Tailwind CSS v4.

---

## 1. Tailwind CSS v4 Native `@theme` Configuration

In **Tailwind CSS v4**, configuration moves from `tailwind.config.js` to pure CSS using the `@theme` directive in `app/globals.css`.

### `app/globals.css` (Tailwind CSS v4 Standard)
```css
@import "tailwindcss";

@layer base {
  :root {
    --background: 240 10% 3.9%;
    --foreground: 0 0% 98%;

    --card: 240 10% 6.5%;
    --card-foreground: 0 0% 98%;

    --popover: 240 10% 8%;
    --popover-foreground: 0 0% 98%;

    --primary: 240 5.9% 90%;
    --primary-foreground: 240 5.9% 10%;

    --secondary: 240 3.7% 15.9%;
    --secondary-foreground: 0 0% 98%;

    --muted: 240 3.7% 15.9%;
    --muted-foreground: 240 5% 64.9%;

    --accent: 240 3.7% 15.9%;
    --accent-foreground: 0 0% 98%;

    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;

    --border: 240 3.7% 15.9%;
    --input: 240 3.7% 15.9%;
    --ring: 240 4.9% 83.9%;

    /* Radius System */
    --radius: 0.625rem;
  }
}

@theme {
  --color-background: hsl(var(--background));
  --color-foreground: hsl(var(--foreground));
  --color-card: hsl(var(--card));
  --color-card-foreground: hsl(var(--card-foreground));
  --color-popover: hsl(var(--popover));
  --color-popover-foreground: hsl(var(--popover-foreground));
  --color-primary: hsl(var(--primary));
  --color-primary-foreground: hsl(var(--primary-foreground));
  --color-secondary: hsl(var(--secondary));
  --color-secondary-foreground: hsl(var(--secondary-foreground));
  --color-muted: hsl(var(--muted));
  --color-muted-foreground: hsl(var(--muted-foreground));
  --color-accent: hsl(var(--accent));
  --color-accent-foreground: hsl(var(--accent-foreground));
  --color-destructive: hsl(var(--destructive));
  --color-destructive-foreground: hsl(var(--destructive-foreground));
  --color-border: hsl(var(--border));
  --color-input: hsl(var(--input));
  --color-ring: hsl(var(--ring));

  --radius-lg: var(--radius);
  --radius-md: calc(var(--radius) - 2px);
  --radius-sm: calc(var(--radius) - 4px);
}
```

*(Note for Tailwind CSS v3: The same variables apply inside `tailwind.config.js` under `theme.extend.colors`).*

---

## 2. Breaking the Default Look: Adding Tailored Variants

Do not settle for just the default `variant: "default" | "outline" | "ghost"`. Extend shadcn's `buttonVariants` to match your application's unique personality:

```typescript
// components/ui/button.tsx
export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-border/80 bg-background/50 hover:bg-accent hover:text-accent-foreground backdrop-blur-sm",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent/80 hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        
        // 🌟 Senior Custom Variants:
        minimal: "border border-transparent hover:border-border/50 text-muted-foreground hover:text-foreground",
        glow: "relative bg-primary text-primary-foreground shadow-[0_0_20px_-3px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_-2px_rgba(255,255,255,0.4)]",
        "ghost-destructive": "text-destructive hover:bg-destructive/10 hover:text-destructive",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-6 text-base font-semibold",
        icon: "h-9 w-9 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
```

---

## 3. `components.json` Best Practices

When initializing shadcn (`npx shadcn@latest init`), ensure your `components.json` adheres to modern aliases:

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "app/globals.css",
    "baseColor": "zinc",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

---

## 4. Senior Customization Checklist for shadcn/ui

- [ ] **Tuned Radius**: Replace generic `rounded-md` or full pills with a cohesive scale: `var(--radius)` (e.g. `0.5rem` or `0.625rem`).
- [ ] **Surface-Aware Borders**: Use `border-border/60` or `border-border/40` rather than harsh solid borders.
- [ ] **Accessible Focus Rings**: Ensure `focus-visible:ring-offset-background` is preserved so the focus outline never visually merges into dark backgrounds.
- [ ] **Loading State Contract**: Add `isLoading` prop support to standard buttons so agents do not have to write separate spinner markup every time.
