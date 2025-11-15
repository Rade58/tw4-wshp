import type { ComponentProps } from "react";

type Props = ComponentProps<"button"> & {
  className?: string;
  label: string;
};

export function DangerButton({ label, ...props }: Props) {
  return <button {...props}>{label}</button>;
}
