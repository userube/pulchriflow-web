import type { ComponentPropsWithoutRef, ElementType } from "react";

type ContainerProps<T extends ElementType> = {
  as?: T;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className">;

export default function Container<T extends ElementType = "div">({
  as,
  className = "",
  ...props
}: ContainerProps<T>) {
  const Component = as ?? "div";
  return <Component className={`marketing-container ${className}`.trim()} {...props} />;
}
