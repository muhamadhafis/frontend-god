"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface TabItem {
  id: string;
  label: string;
  count?: number;
}

export interface AnimatedTabsProps {
  tabs: TabItem[];
  defaultTabId?: string;
  onChange?: (tabId: string) => void;
  className?: string;
}

export function AnimatedTabs({
  tabs,
  defaultTabId,
  onChange,
  className,
}: AnimatedTabsProps) {
  const [activeTab, setActiveTab] = React.useState(defaultTabId || tabs[0]?.id);

  const handleSelect = (tabId: string) => {
    setActiveTab(tabId);
    onChange?.(tabId);
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "ArrowRight") {
      const nextIndex = (index + 1) % tabs.length;
      handleSelect(tabs[nextIndex].id);
    } else if (e.key === "ArrowLeft") {
      const prevIndex = (index - 1 + tabs.length) % tabs.length;
      handleSelect(tabs[prevIndex].id);
    }
  };

  return (
    <div
      role="tablist"
      aria-label="Navigation tabs"
      className={cn(
        "inline-flex items-center gap-1 rounded-xl border border-border/60 bg-muted/40 p-1 backdrop-blur-xs select-none",
        className
      )}
    >
      {tabs.map((tab, index) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            tabIndex={isActive ? 0 : -1}
            onClick={() => handleSelect(tab.id)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={cn(
              "relative flex items-center gap-2 rounded-lg px-3.5 py-1.5 text-xs font-medium transition-colors",
              "focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1",
              isActive
                ? "text-foreground font-semibold"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {isActive && (
              <motion.div
                layoutId="activeTabIndicator"
                className="absolute inset-0 rounded-lg bg-background border border-border/60"
                transition={{
                  type: "spring",
                  stiffness: 450,
                  damping: 32,
                }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
            {tab.count !== undefined && (
              <span
                className={cn(
                  "relative z-10 rounded-full px-1.5 py-0.2 text-[10px] tabular-nums font-mono",
                  isActive
                    ? "bg-foreground/10 text-foreground font-semibold"
                    : "bg-muted text-muted-foreground"
                )}
              >
                {tab.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
