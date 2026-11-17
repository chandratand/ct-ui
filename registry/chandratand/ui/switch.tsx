"use client";

import * as React from "react";
import { Switch as SwitchPrimitive } from "radix-ui";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * A setting that applies immediately (no Save button). Inside a submitted form, use Checkbox.
 * The off thumb uses muted-foreground so the state reads at ≥ 3:1 against the track.
 * Switches are the one control allowed to be fully round.
 */
const switchVariants = cva(
  [
    "peer relative inline-flex shrink-0 cursor-pointer items-center rounded-full border border-input bg-muted",
    "after:absolute after:inset-x-0 after:content-['']",
    "transition-colors duration-(--duration-fast) ease-standard",
    "outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "data-[state=checked]:border-primary data-[state=checked]:bg-primary",
    "disabled:cursor-not-allowed disabled:opacity-50",
  ],
  {
    variants: {
      size: {
        // ::after extends the hit area to 24px (sm/md) and 44px (lg).
        sm: "h-4 w-7 after:-inset-y-1",
        md: "h-5 w-9 after:-inset-y-0.5",
        lg: "h-6 w-11 after:-inset-y-2.5",
      },
    },
    defaultVariants: { size: "md" },
  },
);

// Checked offset = inner track width − thumb − 1px gap.
const thumbVariants = cva(
  [
    "pointer-events-none block rounded-full bg-muted-foreground",
    "translate-x-px transition-transform duration-(--duration-fast) ease-standard",
    "data-[state=checked]:bg-primary-foreground",
  ],
  {
    variants: {
      size: {
        sm: "size-3 data-[state=checked]:translate-x-[13px]",
        md: "size-4 data-[state=checked]:translate-x-[17px]",
        lg: "size-5 data-[state=checked]:translate-x-[21px]",
      },
    },
    defaultVariants: { size: "md" },
  },
);

export interface SwitchProps
  extends React.ComponentProps<typeof SwitchPrimitive.Root>,
    VariantProps<typeof switchVariants> {}

function Switch({ className, size, ...props }: SwitchProps) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(switchVariants({ size }), className)}
      {...props}
    >
      <SwitchPrimitive.Thumb data-slot="switch-thumb" className={thumbVariants({ size })} />
    </SwitchPrimitive.Root>
  );
}

export { Switch, switchVariants };
