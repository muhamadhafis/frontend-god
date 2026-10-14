import * as React from "react";
import { Moon, Sun } from "lucide-react";

export interface ThemeToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Optional callback when theme flips
   */
  onThemeChange?: (theme: "light" | "dark") => void;
}

/**
 * Accessible Dual-Mode Theme Toggle Component.
 * Flips the `.dark` class on `document.documentElement` cleanly using
 * CSS variables transition without hardcoding inline hex styles.
 */
export function ThemeToggle({
  className,
  onThemeChange,
  ...props
}: ThemeToggleProps) {
  const [theme, setTheme] = React.useState<"light" | "dark">("light");

  React.useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);

    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    onThemeChange?.(nextTheme);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      className={`relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/40 bg-background/80 text-foreground backdrop-blur-md transition-colors hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-95 ${
        className ?? ""
      }`}
      {...props}
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-transform duration-200 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-transform duration-200 dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
