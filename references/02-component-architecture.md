# Reference 02: Reusable Component Architecture (React & Next.js)

> **Components Are Not Merely Markup Blocks.**  
> Senior frontend engineers build composable systems: components that expose flexible prop contracts, adapt dynamically to their parent containers, maintain strict type-safety, and observe the architectural boundaries of the Next.js App Router and React 19.

---

## 1. The `cn()` Utility & Class Variance Authority (`cva`)

Never concatenate class strings manually with template literals. Use `clsx` and `tailwind-merge` to resolve specificity collisions cleanly.

### Setup: `lib/utils.ts`
```typescript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### Type-Safe Variants with `cva`
```typescript
import { cva, type VariantProps } from "class-variance-authority";

export const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-md px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/90",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-border text-foreground bg-transparent hover:bg-accent",
        subtle: "border border-border/50 bg-muted/60 text-muted-foreground",
      },
      size: {
        sm: "px-2 py-0.5 text-[11px]",
        md: "px-2.5 py-0.5 text-xs",
        lg: "px-3 py-1 text-sm font-semibold",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}
```

---

## 2. Polymorphic Rendering with `asChild` (The Slot Pattern)

### The Problem
If a button component only renders an HTML `<button>`, you cannot use it directly as a Next.js `<Link>` without invalid HTML (`<button><a>...</a></button>`).

### The Senior Solution: Radix Slot `asChild`
```tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import { buttonVariants, type ButtonVariants } from "./button-variants";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariants {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
```

#### Usage with Next.js Link:
```tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Renders an <a> element with Button styling, zero invalid nesting!
<Button asChild variant="outline">
  <Link href="/dashboard">Go to Dashboard</Link>
</Button>
```

---

## 3. The Compound Component Pattern

For complex UI elements (Cards, Dialogs, Menus, Accordions), avoid passing 15 different props into a single monolithic component. Instead, expose composable subcomponents that share implicit state via React Context.

### Example: Compound Card
```tsx
import * as React from "react";
import { cn } from "@/lib/utils";

interface CardContextValue {
  elevation: "flat" | "elevated" | "interactive";
}

const CardContext = React.createContext<CardContextValue>({ elevation: "flat" });

export function Card({
  className,
  elevation = "flat",
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { elevation?: "flat" | "elevated" | "interactive" }) {
  return (
    <CardContext.Provider value={{ elevation }}>
      <div
        className={cn(
          "@container relative rounded-xl border border-border/60 bg-card text-card-foreground transition-all duration-200",
          elevation === "elevated" && "shadow-md bg-card/95",
          elevation === "interactive" && "hover:border-border hover:shadow-lg cursor-pointer active:scale-[0.99]",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </CardContext.Provider>
  );
}

Card.Header = function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />;
};

Card.Title = function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={cn("text-lg font-semibold leading-none tracking-tight text-foreground", className)} {...props} />
  );
};

Card.Description = function CardDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("text-sm text-muted-foreground leading-relaxed", className)} {...props} />;
};

Card.Content = function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6 pt-0", className)} {...props} />;
};

Card.Footer = function CardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex items-center p-6 pt-0 border-t border-border/40 mt-4", className)} {...props} />;
};
```

---

## 4. Container Queries for Modular Components (`@container`)

### The Viewport Breakpoint Trap
A component built with `md:flex-row` assumes it is rendered on a viewport wider than 768px. But if placed in a 320px dashboard sidebar or a split modal view, it stays horizontally stretched and breaks!

### The Senior Solution: Container Queries
Mark the root card with `@container`, and style children using `@sm:`, `@md:`, `@lg:`:

```tsx
export function MetricWidget({ label, value, trend }: MetricWidgetProps) {
  return (
    // 1. Declare container context
    <div className="@container w-full rounded-xl border border-border/50 bg-card p-4">
      {/* 2. Responsive based on CONTAINER width, not screen width */}
      <div className="flex flex-col gap-2 @sm:flex-row @sm:items-center @sm:justify-between">
        <div>
          <span className="text-xs text-muted-foreground uppercase tracking-wider">{label}</span>
          <div className="font-mono text-2xl font-bold tracking-tight tabular-nums">{value}</div>
        </div>
        <div className="inline-flex items-center text-xs font-medium text-emerald-500">
          {trend}
        </div>
      </div>
    </div>
  );
}
```

---

## 5. Next.js App Router & React 19 Discipline

### A. Push `'use client'` Down to the Leaves
Never put `'use client'` at the top of a page or data layout file. Data fetching should happen on the server:

```
[ app/dashboard/page.tsx (Server Component - fetches data) ]
       │
       ├── <MetricsGrid data={metrics} /> (Server Component - static markup)
       │
       └── <InteractiveFilterBar /> ('use client' - only leaf handles clicks & state)
```

### B. Use `useOptimistic` for Instant Feedback
React 19 provides `useOptimistic` to show immediate visual results without waiting for network roundtrips:

```tsx
"use client";

import { useOptimistic, useTransition } from "react";
import { toggleBookmarkAction } from "@/app/actions";

export function BookmarkButton({ id, initialBookmarked }: { id: string; initialBookmarked: boolean }) {
  const [isPending, startTransition] = useTransition();
  const [optimisticBookmarked, setOptimistic] = useOptimistic(
    initialBookmarked,
    (state, nextValue: boolean) => nextValue
  );

  return (
    <button
      onClick={() => {
        startTransition(async () => {
          setOptimistic(!optimisticBookmarked);
          await toggleBookmarkAction(id, !optimisticBookmarked);
        });
      }}
      className={cn(
        "rounded-md p-2 transition-all active:scale-95",
        optimisticBookmarked ? "text-primary" : "text-muted-foreground"
      )}
      disabled={isPending}
      aria-label="Bookmark item"
    >
      ★
    </button>
  );
}
```
