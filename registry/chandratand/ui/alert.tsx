import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * Inline status message on the page. Always include an icon (first child svg) so status
 * is not colour alone. `role="alert"` only for errors that appear after an action;
 * static notices default to `role="status"`.
 */
const alertVariants = cva(
  [
    "relative grid w-full grid-cols-[0_1fr] items-start gap-y-1 rounded-lg border px-4 py-3 text-sm",
    "has-[>svg]:grid-cols-[var(--icon-sm)_1fr] has-[>svg]:gap-x-3",
    "[&>svg]:size-icon-sm [&>svg]:translate-y-0.5 [&>svg]:stroke-[1.5] [&>svg]:text-current",
  ],
  {
    variants: {
      variant: {
        neutral: "border-border bg-card text-card-foreground",
        info: "border-info-border bg-info-bg text-info",
        success: "border-success-border bg-success-bg text-success",
        warning: "border-warning-border bg-warning-bg text-warning",
        destructive: "border-destructive-border bg-destructive-bg text-destructive",
      },
    },
    defaultVariants: { variant: "neutral" },
  },
);

function Alert({
  className,
  variant,
  role,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role={role ?? (variant === "destructive" ? "alert" : "status")}
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  );
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn("col-start-2 font-medium leading-snug", className)}
      {...props}
    />
  );
}

/** Body text uses foreground (not the status colour) for 4.5:1 on the tinted background. */
function AlertDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn("col-start-2 grid gap-1 text-sm text-foreground [&_p]:leading-relaxed", className)}
      {...props}
    />
  );
}

export { Alert, AlertDescription, AlertTitle, alertVariants };
