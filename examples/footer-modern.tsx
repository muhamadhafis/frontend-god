"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface FooterColumn {
  title: string;
  links: { label: string; href: string; isExternal?: boolean }[];
}

const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "State Synchronization", href: "#sync" },
      { label: "Enterprise Security", href: "#security" },
      { label: "Changelog", href: "#changelog" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "Documentation", href: "#docs" },
      { label: "API Reference", href: "#api" },
      { label: "TypeScript SDK", href: "#sdk" },
      { label: "CLI Utilities", href: "#cli" },
      { label: "GitHub Releases", href: "#releases", isExternal: true },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Case Studies", href: "#case-studies" },
      { label: "SOC2 Compliance", href: "#compliance" },
      { label: "Status Page", href: "#status" },
      { label: "Brand Assets", href: "#brand" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Careers", href: "#careers" },
      { label: "Research Blog", href: "#blog" },
      { label: "Contact Sales", href: "#contact" },
    ],
  },
];

export function ModernFooter({
  wordmark = "PLATFORM",
  className,
}: {
  wordmark?: string;
  className?: string;
}) {
  return (
    <footer
      className={cn(
        "border-t border-border/50 bg-background pt-16 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden",
        className
      )}
    >
      <div className="mx-auto max-w-7xl">
        
        {/* Main Grid: Brand Column + 4 Resource Columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 pb-12 border-b border-border/40">
          
          {/* Brand Column: Monogram, Tagline & Live Status */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <a href="/" className="flex items-center gap-2 font-semibold text-sm tracking-tight text-foreground select-none">
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

            <p className="text-xs text-muted-foreground leading-relaxed max-w-xs font-sans">
              State-deterministic infrastructure and live workflow orchestration for high-velocity software teams.
            </p>

            {/* Live Operational Status Indicator (Solid Dot, No Cheesy Radar Ping) */}
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/30 px-2.5 py-1 text-[11px] text-muted-foreground font-sans">
              <span className="size-1.5 rounded-full bg-emerald-500" />
              <span>All systems normal</span>
            </div>
          </div>

          {/* 4 Categorized Link Columns */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title} className="space-y-3 font-sans">
              <h4 className="text-xs font-semibold text-foreground tracking-tight">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors inline-block"
                      {...(link.isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Oversized Footer Typography / Wordmark Pattern */}
        {wordmark && (
          <div className="w-full border-b border-border/30 py-8 sm:py-12 text-center select-none pointer-events-none">
            <span className="block text-[13vw] font-bold tracking-tighter leading-none text-foreground/[0.06] uppercase">
              {wordmark}
            </span>
          </div>
        )}

        {/* Grounded Bottom Bar: Copyright, Edge Location, & Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground font-sans">
          <p>© 2026 Platform Systems, Inc. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <span>Edge: Frankfurt (fra1)</span>
            <a href="#privacy" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#security" className="hover:text-foreground transition-colors">Security</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
