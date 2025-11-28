import { cn } from "@/lib/cn";
import type { ButtonHTMLAttributes } from "react";
import { forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "inverted";

const baseClasses =
  "inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 disabled:pointer-events-none";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-emerald-600 text-white shadow-lg shadow-emerald-200/60 hover:bg-emerald-500 focus-visible:outline-emerald-600 dark:bg-emerald-400 dark:text-slate-900 dark:hover:bg-emerald-300",
  secondary:
    "border border-zinc-300 bg-zinc-900 text-white hover:bg-zinc-800 focus-visible:outline-zinc-900 dark:border-zinc-600 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100",
  ghost:
    "border border-zinc-300 bg-white text-zinc-900 hover:border-zinc-400 hover:bg-zinc-50 focus-visible:outline-zinc-400 dark:border-zinc-700 dark:bg-transparent dark:text-zinc-100 dark:hover:bg-zinc-800/60",
  inverted:
    "bg-white text-zinc-900 hover:bg-zinc-100 focus-visible:outline-zinc-200 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800",
};

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", type = "button", ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(baseClasses, variantClasses[variant], className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

