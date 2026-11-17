import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * The visible name of a form control. Pass `htmlFor` matching the control's `id`.
 * Sentence case, no trailing colon; mark optional fields "(optional)".
 */
function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      data-slot="label"
      className={cn(
        "flex select-none items-center gap-2 text-sm font-medium leading-none text-foreground",
        "peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        // Label wrapping its control (e.g. <Label><Checkbox disabled /> Text</Label>).
        // Colour, not opacity, so the already-dimmed control isn't dimmed twice.
        "has-[:disabled]:cursor-not-allowed has-[:disabled]:text-muted-foreground",
        "group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Label };
