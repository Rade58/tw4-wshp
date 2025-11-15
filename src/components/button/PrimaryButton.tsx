import type { ComponentProps } from "react";

type Props = ComponentProps<"button"> & {
  className?: string;
  label: string;
};

export function PrimaryButton({ label, ...props }: Props) {
  return (
    <button
      className="cursor-pointer rounded-md bg-cyan-700 px-3 py-1.5 text-white shadow-sm hover:bg-cyan-600"
      {...props}
    >
      {label}
    </button>
  );
}
