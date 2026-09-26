"use client";

import * as React from "react";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Features", href: "#features" },
  { label: "Solutions", href: "#solutions" },
  { label: "Changelog", href: "#changelog" },
  { label: "Documentation", href: "#docs" },
  { label: "Pricing", href: "#pricing" },
];

export function ModernNavbar({
  onOpenSearch,
  className,
}: {
  onOpenSearch?: () => void;
  className?: string;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md transition-colors",
        className
      )}
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Left Section: Brand Logo & Workspace Crumb */}
        <div className="flex items-center gap-6">
          <a href="/" className="flex items-center gap-2.5 font-semibold text-sm tracking-tight text-foreground select-none">
            {/* Minimalist Geometric Monogram Logo */}
            <div className="flex size-6 items-center justify-center rounded-md bg-foreground text-background">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m3 16 9-12 9 12H3z" />
              </svg>
            </div>
            <span>Platform</span>
          </a>

          {/* Quiet Workspace Identifier (Linear / Vercel style) */}
          <div className="hidden sm:flex items-center gap-1.5 pl-2 border-l border-border/60 text-xs text-muted-foreground font-sans">
            <span className="hover:text-foreground cursor-pointer transition-colors">production</span>
            <ChevronDown className="size-3 opacity-60" />
          </div>

          {/* Desktop Horizontal Navigation Links (Sans-serif, quiet hover) */}
          <nav className="hidden md:flex items-center gap-1 pl-4 text-sm font-medium text-muted-foreground">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3 py-1.5 rounded-md hover:text-foreground hover:bg-muted/40 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Right Section: ⌘K Quick Search & High-Contrast Primary CTA */}
        <div className="flex items-center gap-3">
          {/* Subtle Command Search Trigger */}
          <button
            type="button"
            onClick={onOpenSearch}
            className={cn(
              "hidden sm:flex h-8 items-center gap-2 rounded-lg border border-border/60 bg-muted/20 px-2.5 text-xs text-muted-foreground",
              "transition-colors hover:border-border hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            )}
          >
            <Search className="size-3.5 opacity-60" />
            <span>Search docs...</span>
            <kbd className="rounded border border-border bg-muted/60 px-1.5 py-0.5 font-mono text-[10px] tracking-wider text-muted-foreground">
              ⌘K
            </kbd>
          </button>

          {/* Secondary Quiet Link */}
          <a
            href="#sign-in"
            className="hidden sm:inline-flex text-xs font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-1.5"
          >
            Sign In
          </a>

          {/* Single High-Contrast Action Button (Solid, crisp) */}
          <a
            href="#get-started"
            className={cn(
              "inline-flex h-8 items-center justify-center rounded-lg bg-foreground px-3.5 text-xs font-medium text-background",
              "shadow-xs transition-all hover:opacity-90 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            )}
          >
            Get Started
          </a>

          {/* Mobile Hamburger Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden flex size-8 items-center justify-center rounded-lg border border-border/60 text-muted-foreground hover:text-foreground"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Navigation (Slide-Down Sheet) */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border/60 bg-background/95 px-6 py-4 backdrop-blur-xl animate-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-foreground py-1 border-b border-border/20 hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSearch?.();
                }}
                className="flex h-9 w-full items-center justify-between rounded-lg border border-border/60 bg-muted/20 px-3 text-xs text-muted-foreground"
              >
                <span className="flex items-center gap-2">
                  <Search className="size-3.5" />
                  Search documentation...
                </span>
                <kbd className="font-mono text-[10px]">⌘K</kbd>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
