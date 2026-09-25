import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  hasError?: boolean;
  isDisabled?: boolean;
}

export const InputGroup = React.forwardRef<HTMLDivElement, InputGroupProps>(
  ({ className, prefix, suffix, hasError = false, isDisabled = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group relative flex w-full items-center rounded-md border border-input bg-background/50 text-sm shadow-xs transition-colors",
          "focus-within:border-ring focus-within:ring-2 focus-within:ring-ring/20 focus-within:outline-hidden",
          hasError && "border-destructive focus-within:border-destructive focus-within:ring-destructive/20",
          isDisabled && "cursor-not-allowed opacity-50 bg-muted/30",
          className
        )}
        {...props}
      >
        {prefix && (
          <div className="flex items-center pl-3 pr-1 text-muted-foreground select-none">
            {prefix}
          </div>
        )}
        {children}
        {suffix && (
          <div className="flex items-center pr-3 pl-1 text-muted-foreground select-none">
            {suffix}
          </div>
        )}
      </div>
    );
  }
);
InputGroup.displayName = "InputGroup";

export interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

export const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ className, type = "text", hasError = false, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        aria-invalid={hasError}
        className={cn(
          "flex h-9 w-full bg-transparent px-3 py-1 text-sm text-foreground placeholder:text-muted-foreground",
          "focus:outline-hidden disabled:cursor-not-allowed",
          className
        )}
        {...props}
      />
    );
  }
);
InputField.displayName = "InputField";

export function KbdBadge({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-border/80 bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground shadow-2xs">
      {children}
    </kbd>
  );
}
