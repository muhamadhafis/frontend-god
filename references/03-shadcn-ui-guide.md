# Reference 03: Advanced shadcn/ui Integration & Customization Guide

> **"Don't Reinvent the Wheel. Style the Primitives, Don't Hand-Code Fragile DOM."**  
> AI slop developers spend hours writing brittle, inaccessible `div` dropdowns, custom select pickers, or custom modals that lack keyboard navigation, focus trapping, and screen-reader support.  
> Senior Frontend Engineers treat shadcn/ui as battle-tested headless primitives: we leverage rich built-in features (scrollable viewports, group labels, cmdk comboboxes, nested submenus, and mobile bottom drawers) and focus our craft on **hairline borders, subtle surface elevations, and optical spacing**.

---

## 1. Tailwind CSS v4 Native `@theme` & OKLCH Semantic Configuration

In **Tailwind CSS v4**, configuration moves from `tailwind.config.js` to pure CSS using the `@theme inline` and CSS-first directives in `app/globals.css`.

> [!WARNING]
> **Larangan Legacy Config**: Dilarang keras membuat `tailwind.config.js`, `tailwind.config.ts`, atau `postcss.config.js` pada proyek Tailwind v4. Semua token warna, border, dan radius wajib dideklarasikan di CSS.

### `app/globals.css` (Tailwind CSS v4 + OKLCH Standard)
```css
@import "tailwindcss";

@layer base {
  :root {
    --background: oklch(0.985 0 0);
    --foreground: oklch(0.145 0 0);

    --card: oklch(1 0 0);
    --card-foreground: oklch(0.145 0 0);

    --popover: oklch(1 0 0);
    --popover-foreground: oklch(0.145 0 0);

    --primary: oklch(0.205 0 0);
    --primary-foreground: oklch(0.985 0 0);

    --secondary: oklch(0.97 0 0);
    --secondary-foreground: oklch(0.205 0 0);

    --muted: oklch(0.97 0 0);
    --muted-foreground: oklch(0.556 0 0);

    --accent: oklch(0.97 0 0);
    --accent-foreground: oklch(0.205 0 0);

    --destructive: oklch(0.577 0.245 27.325);
    --destructive-foreground: oklch(0.985 0 0);

    --border: oklch(0.922 0 0);
    --input: oklch(0.922 0 0);
    --ring: oklch(0.708 0 0);

    --radius: 0.5rem;
  }

  .dark {
    --background: oklch(0.145 0 0);
    --foreground: oklch(0.985 0 0);

    --card: oklch(0.18 0 0);
    --card-foreground: oklch(0.985 0 0);

    --popover: oklch(0.18 0 0);
    --popover-foreground: oklch(0.985 0 0);

    --primary: oklch(0.985 0 0);
    --primary-foreground: oklch(0.205 0 0);

    --secondary: oklch(0.269 0 0);
    --secondary-foreground: oklch(0.985 0 0);

    --muted: oklch(0.269 0 0);
    --muted-foreground: oklch(0.708 0 0);

    --accent: oklch(0.269 0 0);
    --accent-foreground: oklch(0.985 0 0);

    --destructive: oklch(0.396 0.141 25.723);
    --destructive-foreground: oklch(0.985 0 0);

    --border: oklch(0.269 0 0);
    --input: oklch(0.269 0 0);
    --ring: oklch(0.439 0 0);
  }
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);

  --radius-lg: var(--radius);
  --radius-md: calc(var(--radius) - 2px);
  --radius-sm: calc(var(--radius) - 4px);
}

---

## 1.1. Vite Modular tsconfig & shadcn CLI v4 Resilience

### Masalah:
1. `npx shadcn@latest init` gagal mendeteksi path alias `@/*` pada proyek Vite jika root `tsconfig.json` hanya berisi `references: [{ path: "./tsconfig.app.json" }]`.
2. TypeScript 5.8+ / 6.x melempar `error TS5101: Option 'baseUrl' is deprecated`.

### Solusi Baku:
1. **Root `tsconfig.json` Path Mirroring**:
   Sertakan deklarasi `compilerOptions` di root `tsconfig.json` untuk tooling CLI:
   ```json
   {
     "files": [],
     "references": [
       { "path": "./tsconfig.app.json" },
       { "path": "./tsconfig.node.json" }
     ],
     "compilerOptions": {
       "baseUrl": ".",
       "paths": {
         "@/*": ["./src/*"]
       },
       "ignoreDeprecations": "6.0"
     }
   }
   ```
2. **Atau Native `package.json#imports`**:
   ```json
   {
     "imports": {
       "#/*": "./src/*"
     }
   }
   ```
   Hindari kegagalan build `tsc -b` dengan menyalakan `"ignoreDeprecations": "6.0"` saat masih menggunakan `baseUrl`.

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

---

## 7. Standard Zod Validation Schemas (Indonesian Phone 08/628 & Anti-XSS Sanitization)

When constructing forms with shadcn `<Form>`, use these standardized Zod schemas:

```typescript
import { z } from "zod";

export const contactFormSchema = z.object({
  // Name: 2-50 characters, letters/spaces/hyphens/apostrophes only (No < ! ( ) ? / \ $ { } ;)
  name: z
    .string()
    .min(2, "Nama minimal 2 karakter")
    .max(50, "Nama maksimal 50 karakter")
    .regex(
      /^[a-zA-Z\s'-]+$/,
      "Nama hanya boleh berupa huruf dan tidak boleh mengandung simbol program (< ! ( ) ? / dll)"
    ),

  // Email: Standard RFC email format
  email: z.string().email("Format email tidak valid (contoh: user@domain.com)"),

  // Indonesian Phone: Only digits, MUST start with 08 or 628 (10-13 digits total)
  phone: z
    .string()
    .regex(
      /^(08|628)[0-9]{8,11}$/,
      "No. telp wajib diawali 08 atau 628 dan hanya boleh berisi 10-13 digit angka"
    ),

  // Message/Reason: Must reject code injection symbols (< > ! ( ) ? / \ { } $ ;)
  reason: z
    .string()
    .min(5, "Alasan / pesan minimal 5 karakter")
    .refine(
      (val) => !/[<>/\\\{\}\$\;\!\?\(\)]/.test(val),
      "Pesan tidak boleh mengandung simbol program (< ! ( ) ? / \\ dll)"
    ),
});
```

