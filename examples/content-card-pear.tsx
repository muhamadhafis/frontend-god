import * as React from "react";

export interface ContentCardPearProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  variant?: "yellow" | "purple" | "blue" | "green";
  children?: React.ReactNode;
}

const gradientVariants = {
  yellow: "from-[#ecffb2]/40 via-transparent to-transparent",
  purple: "from-[#e4e1fe]/50 via-transparent to-transparent",
  blue: "from-[#8ed1fc]/35 via-transparent to-transparent",
  green: "from-[#7cee6a]/30 via-transparent to-transparent",
};

/**
 * Pear.vc Style Consumer Content Card.
 * Features an ambient soft-gradient aura header, massive visual slot,
 * and strict single-sentence (<12 words) narrative restraint.
 */
export function ContentCardPear({
  title,
  description,
  variant = "yellow",
  children,
  className,
  ...props
}: ContentCardPearProps) {
  return (
    <article
      className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border/40 bg-card p-6 md:p-8 transition-colors hover:border-border/80 ${
        className ?? ""
      }`}
      {...props}
    >
      {/* Top Ambient Soft-Gradient Radial Aura */}
      <div
        className={`pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-56 w-full max-w-sm rounded-full bg-gradient-to-b ${gradientVariants[variant]} blur-3xl opacity-70 group-hover:opacity-100 transition-opacity`}
      />

      {/* Header Statement */}
      <div className="relative z-10 space-y-2">
        <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
          {title}
        </h3>
      </div>

      {/* Center Massive Visual Slot */}
      <div className="relative z-10 my-6 flex min-h-[220px] md:min-h-[280px] w-full items-center justify-center overflow-hidden rounded-2xl border border-border/20 bg-muted/20">
        {children}
      </div>

      {/* Footer Restraint: Exactly 1 sentence (<= 12 words) */}
      <div className="relative z-10 pt-2 border-t border-border/20">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </article>
  );
}
