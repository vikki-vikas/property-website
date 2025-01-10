import React from "react";
import { cn } from "../libs/utils";

export const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
            "rounded-lg p-4 bg-white ",
            className
          )}
        {...props}
      />
    )
  });