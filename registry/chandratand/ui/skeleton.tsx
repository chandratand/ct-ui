import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Loading placeholder shaped like the content it replaces. Hidden from screen readers;
 * mark the loading region with `aria-busy` instead. Pulse stops under reduced motion.
 */
function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      aria-hidden
      className={cn("animate-pulse rounded-md bg-muted motion-reduce:animate-none", className)}
      {...props}
    />
  );
}

export { Skeleton };
