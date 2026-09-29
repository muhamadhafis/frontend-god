"use client";

import * as React from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CommandItem {
  id: string;
  title: string;
  shortcut?: string;
  category: string;
  onSelect: () => void;
}

export function CommandPalette({
  items,
}: {
  items: CommandItem[];
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  // Global ⌘K / Ctrl+K listener
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const filteredItems = React.useMemo(() => {
    if (!search.trim()) return items;
    return items.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [items, search]);

  React.useEffect(() => {
    setSelectedIndex(0);
  }, [search]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredItems.length));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev === 0 ? filteredItems.length - 1 : prev - 1
      );
    } else if (e.key === "Enter" && filteredItems[selectedIndex]) {
      e.preventDefault();
      filteredItems[selectedIndex].onSelect();
      setIsOpen(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      {/* Modal Dialog */}
      <div
        onKeyDown={handleKeyDown}
        className="relative z-50 w-full max-w-xl overflow-hidden rounded-xl border border-border/80 bg-popover text-popover-foreground transition-all duration-150 animate-in fade-in-0 zoom-in-95"
      >
        {/* Search Input Bar */}
        <div className="flex items-center border-b border-border/50 px-4">
          <Search className="size-4 text-muted-foreground mr-2 shrink-0" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Type a command or search..."
            autoFocus
            className="flex h-12 w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-hidden"
          />
          <kbd className="rounded border border-border/80 bg-muted px-1.5 py-0.5 text-[10px] font-mono text-muted-foreground">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-72 overflow-y-auto p-2">
          {filteredItems.length === 0 ? (
            <div className="p-6 text-center text-xs text-muted-foreground">
              No matching commands found.
            </div>
          ) : (
            filteredItems.map((item, index) => {
              const isSelected = index === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    item.onSelect();
                    setIsOpen(false);
                  }}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={cn(
                    "flex items-center justify-between rounded-lg px-3 py-2 text-xs font-medium cursor-pointer transition-colors",
                    isSelected
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <span className="text-foreground">{item.title}</span>
                  {item.shortcut && (
                    <kbd className="rounded border border-border/70 bg-background/80 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
                      {item.shortcut}
                    </kbd>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Bottom Help Bar */}
        <div className="flex items-center justify-between border-t border-border/40 bg-muted/20 px-4 py-2 text-[11px] text-muted-foreground select-none">
          <div className="flex items-center gap-2">
            <span>Navigate with</span>
            <kbd className="rounded border border-border/60 bg-muted px-1">↑</kbd>
            <kbd className="rounded border border-border/60 bg-muted px-1">↓</kbd>
          </div>
          <div className="flex items-center gap-1">
            <span>Select with</span>
            <kbd className="rounded border border-border/60 bg-muted px-1">↵</kbd>
          </div>
        </div>
      </div>
    </div>
  );
}
