import * as React from "react";
import { cn } from "@/lib/utils";

interface CardContextValue {
  variant: "default" | "interactive" | "flat";
}

const CardContext = React.createContext<CardContextValue>({ variant: "default" });

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "interactive" | "flat";
}

export function Card({
  className,
  variant = "default",
  children,
  ...props
}: CardProps) {
  return (
    <CardContext.Provider value={{ variant }}>
      <div
        className={cn(
          "@container relative flex flex-col rounded-xl border border-border/60 bg-card text-card-foreground transition-all duration-200",
          variant === "default" && "hover:border-border/80",
          variant === "interactive" &&
            "cursor-pointer hover:-translate-y-0.5 hover:border-border active:scale-[0.99]",
          variant === "flat" && "border-border/40",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </CardContext.Provider>
  );
}

Card.Header = function CardHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex flex-col space-y-1.5 p-5 pb-3 @sm:p-6 @sm:pb-4",
        className
      )}
      {...props}
    />
  );
};

Card.Title = function CardTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "font-semibold leading-tight tracking-tight text-foreground text-base @sm:text-lg",
        className
      )}
      {...props}
    />
  );
};

Card.Description = function CardDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "text-xs @sm:text-sm text-muted-foreground leading-relaxed",
        className
      )}
      {...props}
    />
  );
};

Card.Content = function CardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex-1 p-5 pt-0 @sm:p-6 @sm:pt-0", className)}
      {...props}
    />
  );
};

Card.Footer = function CardFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex items-center justify-between border-t border-border/40 p-4 @sm:p-5 mt-auto bg-muted/10 rounded-b-xl",
        className
      )}
      {...props}
    />
  );
};

Card.Action = function CardAction({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("ml-auto flex items-center gap-2", className)}
      {...props}
    />
  );
};
