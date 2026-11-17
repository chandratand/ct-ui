import * as React from "react";
import { Slot } from "radix-ui";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/** Status badges pair colour with text — never colour alone. */
const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center gap-1 whitespace-nowrap rounded-sm border px-2 py-0.5 text-xs font-medium [&_svg]:size-3 [&_svg]:stroke-[1.5]",
  {
    variants: {
      variant: {
        neutral: "border-border bg-secondary text-secondary-foreground",
        primary: "border-transparent bg-primary text-primary-foreground",
        outline: "border-input text-foreground",
        success: "border-success-border bg-success-bg text-success",
        warning: "border-warning-border bg-warning-bg text-warning",
        destructive: "border-destructive-border bg-destructive-bg text-destructive",
        info: "border-info-border bg-info-bg text-info",
      },
    },
    defaultVariants: { variant: "neutral" },
  },
);

export interface BadgeProps
  extends React.ComponentProps<"span">,
    VariantProps<typeof badgeVariants> {
  asChild?: boolean;
}

function Badge({ className, variant, asChild = false, ...props }: BadgeProps) {
  const Comp = asChild ? Slot.Root : "span";
  return <Comp data-slot="badge" className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
