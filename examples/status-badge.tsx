import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const statusBadgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-medium transition-colors select-none",
  {
    variants: {
      status: {
        success:
          "border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
        warning:
          "border-amber-500/20 bg-amber-500/10 text-amber-400",
        error:
          "border-rose-500/20 bg-rose-500/10 text-rose-400",
        info:
          "border-sky-500/20 bg-sky-500/10 text-sky-400",
        neutral:
          "border-border/60 bg-muted/60 text-muted-foreground",
        subtle:
          "border-transparent bg-foreground/5 text-foreground/80",
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

const dotColors = {
  success: "bg-emerald-500",
  warning: "bg-amber-500",
  error: "bg-rose-500",
  info: "bg-sky-500",
  neutral: "bg-muted-foreground",
  subtle: "bg-foreground/50",
};

export interface StatusBadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof statusBadgeVariants> {
  hasPing?: boolean;
}

export function StatusBadge({
  className,
  status = "neutral",
  size = "md",
  hasPing = false,
  children,
  ...props
}: StatusBadgeProps) {
  const resolvedStatus = status || "neutral";
  const dotColor = dotColors[resolvedStatus];

  return (
    <span
      className={cn(statusBadgeVariants({ status, size, className }))}
      {...props}
    >
      {hasPing ? (
        <span className="relative flex size-1.5 shrink-0" aria-hidden="true">
          <span
            className={cn(
              "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
              dotColor
            )}
          />
          <span
            className={cn("relative inline-flex size-1.5 rounded-full", dotColor)}
          />
        </span>
      ) : (
        <span
          className={cn("size-1.5 shrink-0 rounded-full", dotColor)}
          aria-hidden="true"
        />
      )}
      <span>{children}</span>
    </span>
  );
}
