import { cn } from "@/lib/utils";
import React, { forwardRef } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = "submit", ...props }, ref) => {
    return (
      <button
        className={cn(
          `
        w-auto 
        rounded-full
        py-5
        px-4
        disaboled:cursor-not-allowed
        disbled:opacity-50
        text-white
        fonte-semibold
        hover:opacity-75
        transition`,
          className
        )}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
// export default Button;
