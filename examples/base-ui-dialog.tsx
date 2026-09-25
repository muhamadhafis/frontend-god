"use client";

import * as React from "react";
import { Dialog } from "@base-ui-components/react/dialog";
import { cn } from "@/lib/utils";

export interface BaseDialogProps {
  trigger: React.ReactNode;
  title: string;
  description?: string;
  children: React.ReactNode;
  footerActions?: React.ReactNode;
}

export function BaseDialog({
  trigger,
  title,
  description,
  children,
  footerActions,
}: BaseDialogProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="inline-flex items-center justify-center">
        {trigger}
      </Dialog.Trigger>

      <Dialog.Portal>
        {/* Backdrop overlay with blur */}
        <Dialog.Backdrop
          className={cn(
            "fixed inset-0 z-50 bg-black/50 backdrop-blur-xs transition-opacity duration-200",
            "data-[state=open]:animate-in data-[state=open]:fade-in-0",
            "data-[state=closed]:animate-out data-[state=closed]:fade-out-0"
          )}
        />

        {/* Modal Popup with Spring scale-in */}
        <Dialog.Popup
          className={cn(
            "fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-xl border border-border/80 bg-background p-6 shadow-2xl duration-200",
            "focus-visible:outline-hidden",
            "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:slide-in-from-top-2",
            "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:slide-out-to-top-2"
          )}
        >
          <div className="flex flex-col space-y-1.5 text-left">
            <Dialog.Title className="text-lg font-semibold tracking-tight text-foreground">
              {title}
            </Dialog.Title>
            {description && (
              <Dialog.Description className="text-xs text-muted-foreground leading-relaxed">
                {description}
              </Dialog.Description>
            )}
          </div>

          <div className="my-5 text-sm text-foreground/90">{children}</div>

          {footerActions && (
            <div className="flex items-center justify-end gap-2 pt-3 border-t border-border/40">
              {footerActions}
            </div>
          )}

          <Dialog.Close
            className="absolute right-4 top-4 rounded-md p-1 text-muted-foreground transition-opacity hover:text-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Close dialog"
          >
            <span aria-hidden="true" className="text-base leading-none">
              ✕
            </span>
          </Dialog.Close>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
