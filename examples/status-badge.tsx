import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const statusBadgeVariants = cva(
  "inline-flex items-center rounded border px-2.5 py-0.5 font-sans font-medium transition-colors select-none",
  {
    variants: {
      status: {
        success:
          "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
        warning:
          "border-amber-500/30 bg-amber-500/10 text-amber-400",
        error:
          "border-rose-500/30 bg-rose-500/10 text-rose-400",
        info:
          "border-sky-500/30 bg-sky-500/10 text-sky-400",
        neutral:
          "border-border/60 bg-muted/60 text-muted-foreground",
        subtle:
          "border-border/40 bg-foreground/5 text-foreground/80",
      },
      size: {
        sm: "text-[11px] px-2 py-0.5",
        md: "text-xs px-2.5 py-0.5",
        lg: "text-sm px-3 py-1 font-semibold",
      },
    },
    defaultVariants: {
      status: "neutral",
      size: "md",
    },
  }
);

export interface StatusBadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof statusBadgeVariants> {}

export function StatusBadge({
  className,
  status = "neutral",
  size = "md",
  children,
  ...props
}: StatusBadgeProps) {
  return (
    <span
      className={cn(statusBadgeVariants({ status, size, className }))}
      {...props}
    >
      <span>{children}</span>
    </span>
  );
}
