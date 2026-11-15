"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Monitor, Moon, Sun } from "lucide-react";

import { Button } from "@/registry/ct-ui/ui/button";

/** Demo-only controls: mode (light/dark/system) and brand (chandratand/saas). */
export function ThemeControls() {
  const { theme, setTheme } = useTheme();
  const [brand, setBrand] = React.useState<"chandratand" | "saas">("chandratand");
  // true on the client, false during SSR — avoids a hydration mismatch on the active mode.
  const mounted = React.useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  React.useEffect(() => {
    const root = document.documentElement;
    if (brand === "saas") root.setAttribute("data-brand", "saas");
    else root.removeAttribute("data-brand");
  }, [brand]);

  const modes = [
    { value: "light", label: "Light", icon: Sun },
    { value: "dark", label: "Dark", icon: Moon },
    { value: "system", label: "System", icon: Monitor },
  ] as const;

  return (
    <div className="flex flex-wrap items-center gap-2">
      {modes.map(({ value, label, icon: Icon }) => (
        <Button
          key={value}
          size="sm"
          variant={mounted && theme === value ? "secondary" : "ghost"}
          aria-pressed={mounted && theme === value}
          onClick={() => setTheme(value)}
        >
          <Icon aria-hidden />
          {label}
        </Button>
      ))}
      <span className="mx-1 h-5 w-px bg-border" aria-hidden />
      {(["chandratand", "saas"] as const).map((b) => (
        <Button
          key={b}
          size="sm"
          variant={brand === b ? "secondary" : "ghost"}
          aria-pressed={brand === b}
          onClick={() => setBrand(b)}
        >
          {b}
        </Button>
      ))}
    </div>
  );
}
