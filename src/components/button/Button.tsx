import type { ComponentProps } from "react";

type Props = ComponentProps<"button"> & {
  className?: string;
};

export function Button({ children, ...props }: Props) {
  return <button {...props}>{children}</button>;
}
