import * as React from "react";
import { cn } from "@/lib/utils";

export interface MetricCardProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  value: string | number;
  delta?: {
    value: string;
    isPositive: boolean;
  };
  status?: "live" | "warning" | "idle";
  subtext?: string;
}

export function MetricCard({
  className,
  label,
  value,
  delta,
  status = "idle",
  subtext,
  ...props
}: MetricCardProps) {
  return (
    <div
      className={cn(
        "@container relative flex flex-col justify-between overflow-hidden rounded-xl border border-border/60 bg-card p-5 text-card-foreground shadow-xs transition-all hover:border-border/80",
        className
      )}
      {...props}
    >
      {/* Top Header: Label & Live Ping Status */}
      <div className="flex items-center justify-between gap-2">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground select-none">
          {label}
        </span>
        {status === "live" && (
          <div className="flex items-center gap-1.5" title="Live streaming telemetry">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-[10px] font-medium text-emerald-500 uppercase tracking-tight">
              Live
            </span>
          </div>
        )}
      </div>

      {/* Main Metric: Monospaced Tabular Numerals (Zero Layout Jitter) */}
      <div className="mt-3 flex items-baseline gap-3">
        <div className="font-mono text-2xl font-bold tracking-tight text-foreground tabular-nums @sm:text-3xl">
          {value}
        </div>

        {delta && (
          <span
            className={cn(
              "inline-flex items-center gap-0.5 rounded-md px-1.5 py-0.5 text-xs font-semibold tabular-nums",
              delta.isPositive
                ? "bg-emerald-500/10 text-emerald-500"
                : "bg-rose-500/10 text-rose-500"
            )}
          >
            <span aria-hidden="true" className="text-[10px]">
              {delta.isPositive ? "↑" : "↓"}
            </span>
            {delta.value}
          </span>
        )}
      </div>

      {/* Contextual Subtext */}
      {subtext && (
        <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
          {subtext}
        </p>
      )}
    </div>
  );
}
