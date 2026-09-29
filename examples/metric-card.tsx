import * as React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
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
        "@container relative flex flex-col justify-between overflow-hidden rounded-xl border border-border/60 bg-card p-5 text-card-foreground transition-all hover:border-border/80",
        className
      )}
      {...props}
    >
      {/* Top Header: Label & Clean Status Badge */}
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs font-semibold text-muted-foreground select-none font-sans">
          {label}
        </span>
        {status === "live" && (
          <span className="rounded border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-sans font-medium text-emerald-400">
            LIVE
          </span>
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
              "inline-flex items-center gap-1 rounded border px-1.5 py-0.5 text-xs font-sans font-semibold tabular-nums",
              delta.isPositive
                ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                : "border-rose-500/30 bg-rose-500/10 text-rose-400"
            )}
          >
            {delta.isPositive ? (
              <TrendingUp className="size-3" />
            ) : (
              <TrendingDown className="size-3" />
            )}
            <span>{delta.value}</span>
          </span>
        )}
      </div>

      {/* Contextual Subtext */}
      {subtext && (
        <p className="mt-2 text-xs text-muted-foreground leading-relaxed font-sans">
          {subtext}
        </p>
      )}
    </div>
  );
}
