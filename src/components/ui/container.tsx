import { cn } from "@/lib/cn";
import type { ComponentPropsWithoutRef, ElementType } from "react";

type ContainerProps<T extends ElementType> = {
  as?: T;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className">;

const baseClassName = "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8";

export function Container<T extends ElementType = "div">({
  as,
  className,
  ...props
}: ContainerProps<T>) {
  const Component = as ?? "div";

  return <Component className={cn(baseClassName, className)} {...props} />;
}

