"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import {
  ChevronRight,
  Check,
  Circle,
  Copy,
  FolderPlus,
  GitBranch,
  Laptop,
  Moon,
  Plus,
  Settings,
  Share2,
  Sun,
  Trash2,
  UserPlus,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------------------------------
 * Advanced Dropdown Menu with Submenus, Checkboxes, Radio Groups & Keyboard Shortcuts
 * -----------------------------------------------------------------------------------------------*/

export function AdvancedDropdownMenuDemo() {
  const [showTelemetry, setShowTelemetry] = React.useState(true);
  const [showAuditLogs, setShowAuditLogs] = React.useState(false);
  const [themeEngine, setThemeEngine] = React.useState("system");

  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger asChild>
        <button
          type="button"
          className={cn(
            "inline-flex h-9 items-center gap-2 rounded-lg hover:rounded-full border border-border/70 bg-card px-3 text-xs font-medium text-foreground",
            "transition-all duration-300 ease-out hover:bg-accent hover:text-accent-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            "data-[state=open]:border-primary/80"
          )}
        >
          <Settings className="size-3.5 text-muted-foreground" />
          <span>Project Options</span>
        </button>
      </DropdownMenuPrimitive.Trigger>

      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
          sideOffset={6}
          align="start"
          className={cn(
            "z-50 min-w-[240px] overflow-hidden rounded-xl border border-border/80 bg-popover p-1 text-popover-foreground backdrop-blur-md",
            "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
            "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
            "data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2"
          )}
        >
          <DropdownMenuPrimitive.Label className="px-2 py-1.5 font-sans text-[10px] font-semibold uppercase tracking-wider text-muted-foreground select-none">
            Project Workspace
          </DropdownMenuPrimitive.Label>

          <DropdownMenuPrimitive.Group>
            {/* Standard Item with Kbd Shortcut */}
            <DropdownMenuPrimitive.Item
              className={cn(
                "relative flex cursor-pointer select-none items-center rounded-md px-2 py-1.5 text-xs outline-none",
                "transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
              )}
            >
              <Plus className="mr-2 size-3.5 text-muted-foreground" />
              <span>New Deployment</span>
              <kbd className="ml-auto font-mono text-[10px] text-muted-foreground tracking-widest">⌘D</kbd>
            </DropdownMenuPrimitive.Item>

            <DropdownMenuPrimitive.Item
              className={cn(
                "relative flex cursor-pointer select-none items-center rounded-md px-2 py-1.5 text-xs outline-none",
                "transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
              )}
            >
              <GitBranch className="mr-2 size-3.5 text-muted-foreground" />
              <span>Branch Preview</span>
              <kbd className="ml-auto font-mono text-[10px] text-muted-foreground tracking-widest">⌘B</kbd>
            </DropdownMenuPrimitive.Item>
          </DropdownMenuPrimitive.Group>

          <DropdownMenuPrimitive.Separator className="my-1 h-px bg-border/50" />

          {/* NESTED SUBMENU: SHARE & INVITE */}
          <DropdownMenuPrimitive.Sub>
            <DropdownMenuPrimitive.SubTrigger
              className={cn(
                "flex w-full cursor-pointer select-none items-center rounded-md px-2 py-1.5 text-xs outline-none",
                "transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                "data-[state=open]:bg-accent data-[state=open]:text-accent-foreground"
              )}
            >
              <Share2 className="mr-2 size-3.5 text-muted-foreground" />
              <span>Share & Invite</span>
              <ChevronRight className="ml-auto size-3.5 text-muted-foreground opacity-60" />
            </DropdownMenuPrimitive.SubTrigger>

            <DropdownMenuPrimitive.Portal>
              <DropdownMenuPrimitive.SubContent
                sideOffset={4}
                alignOffset={-4}
                className={cn(
                  "z-50 min-w-[200px] overflow-hidden rounded-xl border border-border/80 bg-popover p-1 text-popover-foreground backdrop-blur-md",
                  "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
                  "data-[side=right]:slide-in-from-left-2 data-[side=left]:slide-in-from-right-2"
                )}
              >
                <DropdownMenuPrimitive.Item
                  className="flex cursor-pointer select-none items-center rounded-md px-2 py-1.5 text-xs outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent"
                >
                  <UserPlus className="mr-2 size-3.5 text-muted-foreground" />
                  <span>Invite Member</span>
                </DropdownMenuPrimitive.Item>

                <DropdownMenuPrimitive.Item
                  className="flex cursor-pointer select-none items-center rounded-md px-2 py-1.5 text-xs outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent"
                >
                  <Copy className="mr-2 size-3.5 text-muted-foreground" />
                  <span>Copy Workspace Link</span>
                </DropdownMenuPrimitive.Item>
              </DropdownMenuPrimitive.SubContent>
            </DropdownMenuPrimitive.Portal>
          </DropdownMenuPrimitive.Sub>

          <DropdownMenuPrimitive.Separator className="my-1 h-px bg-border/50" />

          {/* CHECKBOX ITEMS: TOGGLE PREFERENCES */}
          <DropdownMenuPrimitive.CheckboxItem
            checked={showTelemetry}
            onCheckedChange={setShowTelemetry}
            className={cn(
              "relative flex cursor-pointer select-none items-center rounded-md py-1.5 pl-8 pr-2 text-xs outline-none",
              "transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
            )}
          >
            <DropdownMenuPrimitive.ItemIndicator className="absolute left-2.5 inline-flex items-center justify-center">
              <Check className="size-3.5 text-primary" />
            </DropdownMenuPrimitive.ItemIndicator>
            <span>Live Telemetry Stream</span>
          </DropdownMenuPrimitive.CheckboxItem>

          <DropdownMenuPrimitive.CheckboxItem
            checked={showAuditLogs}
            onCheckedChange={setShowAuditLogs}
            className={cn(
              "relative flex cursor-pointer select-none items-center rounded-md py-1.5 pl-8 pr-2 text-xs outline-none",
              "transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
            )}
          >
            <DropdownMenuPrimitive.ItemIndicator className="absolute left-2.5 inline-flex items-center justify-center">
              <Check className="size-3.5 text-primary" />
            </DropdownMenuPrimitive.ItemIndicator>
            <span>Audit Trail Ingestion</span>
          </DropdownMenuPrimitive.CheckboxItem>

          <DropdownMenuPrimitive.Separator className="my-1 h-px bg-border/50" />

          {/* RADIO GROUP: SYSTEM / DARK / LIGHT */}
          <DropdownMenuPrimitive.RadioGroup value={themeEngine} onValueChange={setThemeEngine}>
            <DropdownMenuPrimitive.Label className="px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground select-none">
              Appearance
            </DropdownMenuPrimitive.Label>
            
            <DropdownMenuPrimitive.RadioItem
              value="system"
              className={cn(
                "relative flex cursor-pointer select-none items-center rounded-md py-1.5 pl-8 pr-2 text-xs outline-none",
                "transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
              )}
            >
              <DropdownMenuPrimitive.ItemIndicator className="absolute left-2.5 inline-flex items-center justify-center">
                <Circle className="size-2 fill-primary text-primary" />
              </DropdownMenuPrimitive.ItemIndicator>
              <Laptop className="mr-2 size-3.5 text-muted-foreground" />
              <span>System Native</span>
            </DropdownMenuPrimitive.RadioItem>

            <DropdownMenuPrimitive.RadioItem
              value="dark"
              className={cn(
                "relative flex cursor-pointer select-none items-center rounded-md py-1.5 pl-8 pr-2 text-xs outline-none",
                "transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
              )}
            >
              <DropdownMenuPrimitive.ItemIndicator className="absolute left-2.5 inline-flex items-center justify-center">
                <Circle className="size-2 fill-primary text-primary" />
              </DropdownMenuPrimitive.ItemIndicator>
              <Moon className="mr-2 size-3.5 text-muted-foreground" />
              <span>Dark Spectrum</span>
            </DropdownMenuPrimitive.RadioItem>
          </DropdownMenuPrimitive.RadioGroup>

          <DropdownMenuPrimitive.Separator className="my-1 h-px bg-border/50" />

          {/* DESTRUCTIVE ACTION */}
          <DropdownMenuPrimitive.Item
            className={cn(
              "relative flex cursor-pointer select-none items-center rounded-md px-2 py-1.5 text-xs text-destructive outline-none",
              "transition-colors hover:bg-destructive/10 focus:bg-destructive/10 focus:text-destructive"
            )}
          >
            <Trash2 className="mr-2 size-3.5 text-destructive" />
            <span>Archive Project</span>
            <kbd className="ml-auto font-mono text-[10px] text-destructive/70 tracking-widest">⇧⌘⌫</kbd>
          </DropdownMenuPrimitive.Item>
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  );
}
