"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface TelemetryRow {
  id: string;
  deploymentId: string;
  environment: "production" | "staging" | "preview";
  latencyMs: number;
  commitSha: string;
  status: "healthy" | "degraded" | "failed";
  timestamp: string;
}

const mockData: TelemetryRow[] = [
  {
    id: "node-01",
    deploymentId: "dep_9f81a7b3c20e4d15",
    environment: "production",
    latencyMs: 14.2,
    commitSha: "8a4f10c",
    status: "healthy",
    timestamp: "2026-10-13T09:12:00Z",
  },
  {
    id: "node-02",
    deploymentId: "dep_3e44b82d91a07c44",
    environment: "production",
    latencyMs: 18.6,
    commitSha: "f02b91d",
    status: "healthy",
    timestamp: "2026-10-13T09:11:42Z",
  },
  {
    id: "node-03",
    deploymentId: "dep_1a2c5e7b9d0f2a41",
    environment: "staging",
    latencyMs: 82.4,
    commitSha: "2c7e19a",
    status: "degraded",
    timestamp: "2026-10-13T09:10:15Z",
  },
];

export function CockpitDataTable() {
  const [copiedId, setCopiedId] = React.useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId((current) => (current === id ? null : current));
    }, 2000);
  };

  return (
    <div className="w-full rounded-lg border border-border/60 bg-card p-3 shadow-none">
      <div className="flex items-center justify-between pb-2">
        <div>
          <h3 className="text-xs font-semibold tracking-tight text-foreground">
            Active Nodes Telemetry
          </h3>
          <p className="text-[11px] text-muted-foreground">
            Real-time edge cluster status and query latencies.
          </p>
        </div>
        <span className="font-mono text-[11px] tabular-nums text-muted-foreground">
          3 / 3 active
        </span>
      </div>

      <div className="w-full overflow-x-auto scrollbar-thin">
        <table className="w-full min-w-[560px] border-collapse text-left text-xs">
          <thead>
            <tr className="border-b border-border/50 text-[11px] text-muted-foreground">
              <th className="h-8 px-2 font-medium">Node ID</th>
              <th className="h-8 px-2 font-medium">Deployment ID</th>
              <th className="h-8 px-2 font-medium">Env</th>
              <th className="h-8 px-2 font-medium text-right">Latency</th>
              <th className="h-8 px-2 font-medium">Commit</th>
              <th className="h-8 px-2 font-medium">Status</th>
              <th className="h-8 px-2 text-right font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {mockData.map((row) => (
              <tr
                key={row.id}
                className="h-9 border-b border-border/30 hover:bg-muted/30 transition-colors"
              >
                <td className="px-2 font-mono text-[11px] text-foreground">
                  {row.id}
                </td>
                <td className="px-2">
                  <span
                    className="inline-block max-w-[140px] truncate font-mono text-[11px] text-muted-foreground"
                    title={row.deploymentId}
                  >
                    {row.deploymentId}
                  </span>
                </td>
                <td className="px-2">
                  <span
                    className={cn(
                      "rounded px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wider",
                      row.environment === "production"
                        ? "border border-primary/20 bg-primary/10 text-primary"
                        : "border border-border/40 bg-muted/50 text-muted-foreground",
                    )}
                  >
                    {row.environment}
                  </span>
                </td>
                <td className="px-2 text-right font-mono text-[11px] tabular-nums text-foreground">
                  {row.latencyMs.toFixed(1)} ms
                </td>
                <td className="px-2 font-mono text-[11px] text-muted-foreground">
                  {row.commitSha}
                </td>
                <td className="px-2">
                  <span
                    className={cn(
                      "rounded px-1.5 py-0.5 text-[10px] font-medium",
                      row.status === "healthy"
                        ? "border border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                        : "border border-amber-500/30 bg-amber-500/10 text-amber-400",
                    )}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="px-2 text-right">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleCopy(row.deploymentId, row.id)}
                    className="size-6 text-muted-foreground hover:text-foreground"
                    aria-label={`Copy deployment ID for ${row.id}`}
                  >
                    {copiedId === row.id ? (
                      <Check className="size-3 text-emerald-500" />
                    ) : (
                      <Copy className="size-3" />
                    )}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
