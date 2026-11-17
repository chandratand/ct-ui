"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Monitor, Moon, Sun } from "lucide-react";

import { Button } from "@/registry/chandratand/ui/button";

/** Demo-only control: mode (light/dark/system). */
export function ThemeControls() {
  const { theme, setTheme } = useTheme();
  // true on the client, false during SSR — avoids a hydration mismatch on the active mode.
  const mounted = React.useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

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
    </div>
  );
}
