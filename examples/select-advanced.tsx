"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp, ChevronsUpDown, Search, Server } from "lucide-react";
import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------------------------------
 * 1. Scrollable & Grouped Select Primitives
 * -----------------------------------------------------------------------------------------------*/

export interface RegionOption {
  id: string;
  name: string;
  location: string;
  latencyMs: number;
}

export interface RegionGroup {
  region: string;
  items: RegionOption[];
}

const REGION_DATA: RegionGroup[] = [
  {
    region: "Europe & Middle East",
    items: [
      { id: "fra1", name: "Frankfurt", location: "Germany", latencyMs: 14 },
      { id: "lhr1", name: "London", location: "United Kingdom", latencyMs: 18 },
      { id: "ams1", name: "Amsterdam", location: "Netherlands", latencyMs: 16 },
      { id: "cdg1", name: "Paris", location: "France", latencyMs: 21 },
    ],
  },
  {
    region: "North America",
    items: [
      { id: "iad1", name: "Virginia", location: "US East", latencyMs: 34 },
      { id: "sfo1", name: "San Francisco", location: "US West", latencyMs: 62 },
      { id: "ord1", name: "Chicago", location: "US Central", latencyMs: 44 },
    ],
  },
  {
    region: "Asia Pacific",
    items: [
      { id: "hnd1", name: "Tokyo", location: "Japan", latencyMs: 110 },
      { id: "sin1", name: "Singapore", location: "Singapore", latencyMs: 125 },
      { id: "syd1", name: "Sydney", location: "Australia", latencyMs: 170 },
    ],
  },
];

export function AdvancedRegionSelect({
  value,
  onValueChange,
  className,
}: {
  value?: string;
  onValueChange?: (val: string) => void;
  className?: string;
}) {
  return (
    <SelectPrimitive.Root value={value} onValueChange={onValueChange} defaultValue="fra1">
      <SelectPrimitive.Trigger
        className={cn(
          "flex h-9 w-[280px] items-center justify-between rounded-lg hover:rounded-full border border-border/70 bg-card px-3 py-2 text-xs font-sans text-foreground",
          "transition-all duration-300 ease-out hover:bg-accent/50 hover:border-border",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        aria-label="Select deployment edge region"
      >
        <SelectPrimitive.Value placeholder="Select deployment region..." />
        <SelectPrimitive.Icon asChild>
          <ChevronDown className="size-3.5 text-muted-foreground opacity-60" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          className={cn(
            "relative z-50 max-h-72 min-w-[280px] overflow-hidden rounded-xl border border-border/80 bg-popover text-popover-foreground backdrop-blur-md",
            "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
            "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
            "data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2"
          )}
          position="popper"
          sideOffset={6}
        >
          {/* Scroll Up Button Indicator */}
          <SelectPrimitive.ScrollUpButton className="flex h-6 cursor-default items-center justify-center bg-popover/80 text-muted-foreground">
            <ChevronUp className="size-3.5" />
          </SelectPrimitive.ScrollUpButton>

          <SelectPrimitive.Viewport className="p-1">
            {REGION_DATA.map((group, idx) => (
              <React.Fragment key={group.region}>
                {idx > 0 && <SelectPrimitive.Separator className="my-1 h-px bg-border/50" />}
                <SelectPrimitive.Group>
                  <SelectPrimitive.Label className="px-2 py-1.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground select-none">
                    {group.region}
                  </SelectPrimitive.Label>
                  {group.items.map((item) => (
                    <SelectPrimitive.Item
                      key={item.id}
                      value={item.id}
                      className={cn(
                        "relative flex w-full cursor-pointer select-none items-center rounded-md py-1.5 pl-2 pr-8 text-xs outline-none",
                        "transition-colors hover:bg-accent hover:text-accent-foreground",
                        "focus:bg-accent focus:text-accent-foreground",
                        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                      )}
                    >
                      <div className="flex w-full items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <Server className="size-3.5 text-muted-foreground shrink-0" />
                          <span className="font-medium text-foreground">{item.name}</span>
                          <span className="font-mono text-[10px] text-muted-foreground">({item.id})</span>
                        </div>
                        <span
                          className={cn(
                            "font-mono text-[10px]",
                            item.latencyMs < 30
                              ? "text-emerald-500"
                              : item.latencyMs < 80
                              ? "text-amber-500"
                              : "text-muted-foreground"
                          )}
                        >
                          {item.latencyMs}ms
                        </span>
                      </div>

                      <SelectPrimitive.ItemIndicator className="absolute right-2.5 inline-flex items-center justify-center">
                        <Check className="size-3.5 text-primary" />
                      </SelectPrimitive.ItemIndicator>
                    </SelectPrimitive.Item>
                  ))}
                </SelectPrimitive.Group>
              </React.Fragment>
            ))}
          </SelectPrimitive.Viewport>

          {/* Scroll Down Button Indicator */}
          <SelectPrimitive.ScrollDownButton className="flex h-6 cursor-default items-center justify-center bg-popover/80 text-muted-foreground">
            <ChevronDown className="size-3.5" />
          </SelectPrimitive.ScrollDownButton>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
}

/* -------------------------------------------------------------------------------------------------
 * 2. Searchable Combobox Primitive (Inline Accessible Filter)
 * -----------------------------------------------------------------------------------------------*/

interface FrameworkOption {
  value: string;
  label: string;
  category: string;
}

const FRAMEWORKS: FrameworkOption[] = [
  { value: "next", label: "Next.js 15 (App Router)", category: "React" },
  { value: "remix", label: "Remix / React Router v7", category: "React" },
  { value: "vite", label: "Vite + React SPA", category: "React" },
  { value: "astro", label: "Astro SSR Islands", category: "Multi-framework" },
  { value: "svelte", label: "SvelteKit 2", category: "Svelte" },
  { value: "nuxt", label: "Nuxt 3", category: "Vue" },
];

export function SearchableFrameworkPicker({
  value,
  onSelect,
}: {
  value?: string;
  onSelect?: (val: string) => void;
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selected, setSelected] = React.useState(value || "next");

  const filtered = React.useMemo(() => {
    if (!searchQuery.trim()) return FRAMEWORKS;
    return FRAMEWORKS.filter(
      (fw) =>
        fw.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
        fw.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const selectedLabel = FRAMEWORKS.find((fw) => fw.value === selected)?.label;

  return (
    <div className="relative inline-block w-72">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={cn(
          "flex h-9 w-full items-center justify-between rounded-lg border border-border/70 bg-card px-3 text-xs text-foreground",
          "transition-colors hover:bg-accent/40 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
          isOpen && "border-primary ring-1 ring-primary"
        )}
      >
        <span className="truncate">{selectedLabel || "Select engine..."}</span>
        <ChevronsUpDown className="size-3.5 text-muted-foreground opacity-50 shrink-0 ml-2" />
      </button>

      {isOpen && (
        <>
          {/* Backdrop click interceptor */}
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />

          <div className="absolute left-0 top-full z-50 mt-1.5 w-full rounded-xl border border-border/80 bg-popover p-1 text-popover-foreground backdrop-blur-md">
            {/* Search Input Box */}
            <div className="relative flex items-center border-b border-border/40 px-2 pb-1.5 pt-1">
              <Search className="size-3.5 text-muted-foreground shrink-0 mr-2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter framework..."
                className="w-full bg-transparent text-xs text-foreground placeholder:text-muted-foreground focus:outline-none"
                autoFocus
              />
            </div>

            {/* Filtered List */}
            <div className="max-h-52 overflow-y-auto py-1">
              {filtered.length === 0 ? (
                <p className="py-4 text-center text-xs text-muted-foreground">No matches found.</p>
              ) : (
                filtered.map((fw) => {
                  const isCurrent = selected === fw.value;
                  return (
                    <button
                      key={fw.value}
                      type="button"
                      onClick={() => {
                        setSelected(fw.value);
                        onSelect?.(fw.value);
                        setIsOpen(false);
                        setSearchQuery("");
                      }}
                      className={cn(
                        "flex w-full items-center justify-between rounded-md px-2.5 py-1.5 text-left text-xs transition-colors",
                        isCurrent
                          ? "bg-accent text-accent-foreground font-medium"
                          : "text-foreground hover:bg-accent/50"
                      )}
                    >
                      <div className="flex flex-col">
                        <span>{fw.label}</span>
                        <span className="text-[10px] text-muted-foreground font-mono">{fw.category}</span>
                      </div>
                      {isCurrent && <Check className="size-3.5 text-primary shrink-0" />}
                    </button>
                  );
                })
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
