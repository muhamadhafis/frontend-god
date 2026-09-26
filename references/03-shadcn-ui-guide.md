# Reference 03: Advanced shadcn/ui Integration & Customization Guide

> **"Don't Reinvent the Wheel. Style the Primitives, Don't Hand-Code Fragile DOM."**  
> AI slop developers spend hours writing brittle, inaccessible `div` dropdowns, custom select pickers, or custom modals that lack keyboard navigation, focus trapping, and screen-reader support.  
> Senior Frontend Engineers treat shadcn/ui as battle-tested headless primitives: we leverage rich built-in features (scrollable viewports, group labels, cmdk comboboxes, nested submenus, and mobile bottom drawers) and focus our craft on **hairline borders, subtle surface elevations, and optical spacing**.

---

## 1. Tailwind CSS v4 Native `@theme` Configuration

In **Tailwind CSS v4**, configuration moves from `tailwind.config.js` to pure CSS using the `@theme` directive in `app/globals.css`.

### `app/globals.css` (Tailwind CSS v4 Standard)
```css
@import "tailwindcss";

@layer base {
  :root {
    --background: 240 10% 3.9%;
    --foreground: 0 0% 98%;

    --card: 240 10% 6.5%;
    --card-foreground: 0 0% 98%;

    --popover: 240 10% 8%;
    --popover-foreground: 0 0% 98%;

    --primary: 240 5.9% 90%;
    --primary-foreground: 240 5.9% 10%;

    --secondary: 240 3.7% 15.9%;
    --secondary-foreground: 0 0% 98%;

    --muted: 240 3.7% 15.9%;
    --muted-foreground: 240 5% 64.9%;

    --accent: 240 3.7% 15.9%;
    --accent-foreground: 0 0% 98%;

    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;

    --border: 240 3.7% 15.9%;
    --input: 240 3.7% 15.9%;
    --ring: 240 4.9% 83.9%;

    /* Senior Radius Scale */
    --radius: 0.5rem;
  }
}

@theme {
  --color-background: hsl(var(--background));
  --color-foreground: hsl(var(--foreground));
  --color-card: hsl(var(--card));
  --color-card-foreground: hsl(var(--card-foreground));
  --color-popover: hsl(var(--popover));
  --color-popover-foreground: hsl(var(--popover-foreground));
  --color-primary: hsl(var(--primary));
  --color-primary-foreground: hsl(var(--primary-foreground));
  --color-secondary: hsl(var(--secondary));
  --color-secondary-foreground: hsl(var(--secondary-foreground));
  --color-muted: hsl(var(--muted));
  --color-muted-foreground: hsl(var(--muted-foreground));
  --color-accent: hsl(var(--accent));
  --color-accent-foreground: hsl(var(--accent-foreground));
  --color-destructive: hsl(var(--destructive));
  --color-destructive-foreground: hsl(var(--destructive-foreground));
  --color-border: hsl(var(--border));
  --color-input: hsl(var(--input));
  --color-ring: hsl(var(--ring));

  --radius-lg: var(--radius);
  --radius-md: calc(var(--radius) - 2px);
  --radius-sm: calc(var(--radius) - 4px);
}
```

---

## 2. Scrollable & Grouped Select Primitives

Banyak AI agent tidak tahu bahwa shadcn `<Select>` memiliki dukungan bawaan untuk **Scroll Buttons** dan **Group Labels**. Jangan biarkan menu dropdown memanjang keluar layar tanpa scroll buttons!

```tsx
// components/advanced-select.tsx
"use client";

import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Globe, Server, Database } from "lucide-react";

export function RegionSelector() {
  return (
    <Select defaultValue="fra">
      <SelectTrigger className="w-[280px] h-9 border-border/70 bg-card text-xs font-mono">
        <SelectValue placeholder="Select deployment region" />
      </SelectTrigger>
      
      {/* Scrollable Viewport dengan Max Height & Optical Padding */}
      <SelectContent className="max-h-72 border-border/80 bg-popover shadow-xl backdrop-blur-md">
        
        {/* GROUP 1: EUROPE */}
        <SelectGroup>
          <SelectLabel className="px-2 py-1.5 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
            Europe & UK
          </SelectLabel>
          <SelectItem value="fra" className="text-xs">
            <div className="flex items-center gap-2">
              <Server className="size-3.5 text-muted-foreground" />
              <span>Frankfurt (fra1)</span>
              <span className="ml-auto font-mono text-[10px] text-emerald-500">12ms</span>
            </div>
          </SelectItem>
          <SelectItem value="lhr" className="text-xs">
            <div className="flex items-center gap-2">
              <Server className="size-3.5 text-muted-foreground" />
              <span>London (lhr1)</span>
              <span className="ml-auto font-mono text-[10px] text-emerald-500">18ms</span>
            </div>
          </SelectItem>
        </SelectGroup>

        <SelectSeparator className="my-1 bg-border/50" />

        {/* GROUP 2: NORTH AMERICA */}
        <SelectGroup>
          <SelectLabel className="px-2 py-1.5 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
            North America
          </SelectLabel>
          <SelectItem value="iad" className="text-xs">
            <div className="flex items-center gap-2">
              <Database className="size-3.5 text-muted-foreground" />
              <span>Virginia (iad1)</span>
              <span className="ml-auto font-mono text-[10px] text-emerald-500">32ms</span>
            </div>
          </SelectItem>
          <SelectItem value="sfo" className="text-xs">
            <div className="flex items-center gap-2">
              <Database className="size-3.5 text-muted-foreground" />
              <span>San Francisco (sfo1)</span>
              <span className="ml-auto font-mono text-[10px] text-amber-500">65ms</span>
            </div>
          </SelectItem>
        </SelectGroup>

      </SelectContent>
    </Select>
  );
}
```

---

## 3. Searchable Combobox & Multi-Select with cmdk

Ketika opsi lebih dari 7 item atau membutuhkan pencarian instan, **gunakan kombinasi `Popover` + `Command` (cmdk)**:

```tsx
// components/searchable-combobox.tsx
"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface FrameworkItem {
  value: string;
  label: string;
}

const frameworks: FrameworkItem[] = [
  { value: "next", label: "Next.js (App Router)" },
  { value: "remix", label: "Remix / React Router v7" },
  { value: "astro", label: "Astro SSR" },
  { value: "vite", label: "Vite + React SPA" },
];

export function SearchableFrameworkCombobox() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("next");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[260px] h-9 justify-between border-border/70 bg-card text-xs font-normal"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Select engine..."}
          <ChevronsUpDown className="ml-2 size-3.5 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      
      <PopoverContent className="w-[260px] p-0 border-border/80 bg-popover shadow-xl" align="start">
        <Command>
          <CommandInput placeholder="Search framework..." className="h-9 text-xs" />
          <CommandList className="max-h-60 overflow-y-auto p-1">
            <CommandEmpty className="py-6 text-center text-xs text-muted-foreground">
              No runtime framework found.
            </CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                  className="text-xs cursor-pointer rounded-md px-2 py-1.5"
                >
                  <Check
                    className={cn(
                      "mr-2 size-3.5",
                      value === framework.value ? "opacity-100 text-primary" : "opacity-0"
                    )}
                  />
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
```

---

## 4. Nested Dropdown Menus dengan Submenus & Kbd Shortcuts

Gunakan submenus bertingkat untuk menyembunyikan aksi kompleks tanpa membuat menu utama sesak:

```tsx
// components/advanced-dropdown.tsx
"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { UserPlus, Mail, MessageSquare, PlusCircle } from "lucide-react";

export function TeamActionsMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="h-8 gap-2 text-xs border-border/70">
          <span>Manage Workspace</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56 border-border/80 bg-popover shadow-xl" align="end">
        <DropdownMenuLabel className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          Workspace Actions
        </DropdownMenuLabel>
        
        <DropdownMenuGroup>
          <DropdownMenuItem className="text-xs cursor-pointer">
            <span>New Project</span>
            <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
          </DropdownMenuItem>

          {/* SUBMENU BERTINGKAT (NESTED SUBMENU) */}
          <DropdownMenuSub>
            <DropdownMenuSubTrigger className="text-xs cursor-pointer">
              <UserPlus className="mr-2 size-3.5 text-muted-foreground" />
              <span>Invite Teammates</span>
            </DropdownMenuSubTrigger>
            
            <DropdownMenuPortal>
              <DropdownMenuSubContent className="w-48 border-border/80 bg-popover shadow-xl">
                <DropdownMenuItem className="text-xs cursor-pointer">
                  <Mail className="mr-2 size-3.5 text-muted-foreground" />
                  <span>Via Email Link</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-xs cursor-pointer">
                  <MessageSquare className="mr-2 size-3.5 text-muted-foreground" />
                  <span>Via Slack Channel</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-border/50" />
                <DropdownMenuItem className="text-xs cursor-pointer">
                  <PlusCircle className="mr-2 size-3.5 text-muted-foreground" />
                  <span>More options...</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>

        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```

---

## 5. Responsive Dialog vs Drawer Pattern (Desktop vs Mobile)

Pola emas modern: Pada desktop pengguna mendapatkan modal `<Dialog>` yang berpusat di tengah layar. Pada layar mobile/touch screen, modal otomatis berubah menjadi `<Drawer>` (bottom-sheet yang bisa di-swipe ke bawah via Vaul):

```tsx
// components/responsive-modal.tsx
"use client";

import * as React from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

export function ResponsiveFormModal({
  trigger,
  title,
  description,
  children,
}: {
  trigger: React.ReactNode;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        <DialogContent className="sm:max-w-[425px] border-border/80 bg-card shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold tracking-tight">{title}</DialogTitle>
            <DialogDescription className="text-xs text-muted-foreground">{description}</DialogDescription>
          </DialogHeader>
          {children}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DrawerContent className="border-t border-border/80 bg-card p-4">
        {/* Drag Handle Bar */}
        <div className="mx-auto h-1.5 w-12 rounded-full bg-muted-foreground/30 mb-4" />
        <DrawerHeader className="text-left px-0 pt-0">
          <DrawerTitle className="text-lg font-semibold tracking-tight">{title}</DrawerTitle>
          <DrawerDescription className="text-xs text-muted-foreground">{description}</DrawerDescription>
        </DrawerHeader>
        <div className="py-2">{children}</div>
        <DrawerFooter className="px-0 pt-4">
          <DrawerClose asChild>
            <Button variant="outline" className="w-full text-xs">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
```

---

## 6. Senior Customization Checklist for shadcn/ui

- [ ] **Tuned Radius**: Ganti default `rounded-md` yang generic dengan variabel kohesif: `var(--radius)` (e.g. `0.5rem`).
- [ ] **Surface-Aware Borders**: Gunakan `border-border/70` atau `border-border/50` daripada border pekat solid.
- [ ] **Accessible Focus Rings**: Pertahankan `focus-visible:ring-offset-background` agar cincin fokus tidak tenggelam di background gelap.
- [ ] **Haram Custom Div Dropdowns**: Selalu gunakan komponen primitif Radix/shadcn yang sudah 100% compliant WAI-ARIA.
