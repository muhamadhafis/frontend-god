# Reference 07: The 5 States of UI & State Polish

> **A Junior Thinks of the Happy Path. A Senior Designs All 5 States.**  
> The difference between a prototype and production software is how gracefully the interface handles non-ideal conditions: network delays, empty databases, API failures, and instant optimistic updates.

---

## 1. The 5 UI States Spectrum

Every data-dependent component must be architected to represent all 5 states cleanly:

```
[ 1. Idle ]       → Standard settled state with data
[ 2. Loading ]    → Content-shaped skeleton (Zero CLS)
[ 3. Empty ]      → Actionable empty state with guidance
[ 4. Error ]      → Human-readable message + Retry action
[ 5. Optimistic ] → Immediate local state update during mutations
```

---

## 2. Zero-CLS Skeleton Design (Content-Shaped Shimmers)

### The AI Failure
Placing a single centered spinning circle inside a blank box. When data loads, the entire page height jumps (Cumulative Layout Shift).

### The Senior Solution: Content-Accurate Skeletons
Build skeletons that match the exact lines, heights, and avatar shapes of the loaded card:

```tsx
import { cn } from "@/lib/utils";

export function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted/70", className)}
      {...props}
    />
  );
}

export function ProjectCardSkeleton() {
  return (
    <div className="rounded-xl border border-border/50 bg-card p-6 space-y-4">
      <div className="flex items-center justify-between">
        <Skeleton className="h-5 w-32" />
        <Skeleton className="h-4 w-12 rounded-full" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
      </div>
      <div className="pt-2 flex items-center gap-3">
        <Skeleton className="size-6 rounded-full" />
        <Skeleton className="h-3 w-24" />
      </div>
    </div>
  );
}
```

---

## 3. Actionable Empty States

An empty state is not a dead end; it is an onboarding opportunity.
- Include a relevant, minimal icon or vector motif.
- Provide a clear, supportive headline and explanatory subtext.
- Offer a prominent primary action button.

```tsx
import { FolderPlus } from "lucide-react";
import { Button } from "@/components/ui/button";

export function EmptyProjectsState({ onCreateProject }: { onCreateProject: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border/80 bg-muted/20 p-12 text-center">
      <div className="flex size-12 items-center justify-center rounded-xl border border-border/60 bg-background shadow-sm">
        <FolderPlus className="size-6 text-muted-foreground" aria-hidden="true" />
      </div>
      <h3 className="mt-4 text-base font-semibold text-foreground">No projects created yet</h3>
      <p className="mt-1.5 max-w-sm text-xs leading-relaxed text-muted-foreground">
        Get started by creating your first deployment pipeline or importing an existing repository.
      </p>
      <div className="mt-6 flex items-center gap-3">
        <Button onClick={onCreateProject} size="sm">
          Create New Project
        </Button>
        <Button variant="outline" size="sm">
          Import from Git
        </Button>
      </div>
    </div>
  );
}
```

---

## 4. Human-Friendly Error Boundaries

Avoid showing raw JSON or cryptic stack traces. Provide an actionable recovery mechanism:

```tsx
"use client";

import { AlertCircle, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ErrorFallback({
  error,
  resetErrorBoundary,
}: {
  error: Error;
  resetErrorBoundary: () => void;
}) {
  return (
    <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-6 text-center">
      <div className="mx-auto flex size-10 items-center justify-center rounded-full bg-destructive/10 text-destructive">
        <AlertCircle className="size-5" />
      </div>
      <h4 className="mt-3 text-sm font-semibold text-foreground">Failed to load analytics</h4>
      <p className="mt-1 text-xs text-muted-foreground max-w-md mx-auto">
        {error.message || "An unexpected error occurred while communicating with the telemetry server."}
      </p>
      <div className="mt-4 flex justify-center">
        <Button onClick={resetErrorBoundary} variant="outline" size="sm" className="gap-2">
          <RotateCcw className="size-3.5" />
          <span>Retry Request</span>
        </Button>
      </div>
    </div>
  );
}
```

---

## 5. Realistic Data Stress Testing (Edge Cases)

Always verify your components with stress test inputs:
1. **Ultra-Long Strings**: Names or emails that wrap. Use `truncate` or `break-words`:
   ```tsx
   <span className="truncate max-w-[180px] inline-block font-medium" title={user.email}>
     {user.email}
   </span>
   ```
2. **Numeric Precision**: Quantities with commas and currency signs. Always apply `font-mono tabular-nums`.
3. **Empty Arrays**: How does the table render when `rows = []`? Does it crash on `.map()` or render an empty state?
