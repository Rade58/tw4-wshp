import type { ComponentProps } from "react";

type Props = ComponentProps<"button"> & {
  className?: string;
  label: string;
};

export function SecondaryButton({ label, ...props }: Props) {
  return (
    <button
      className="cursor-pointer rounded-md bg-white px-3 py-1.5 text-black shadow-md ring-2 ring-slate-600 ring-inset hover:bg-slate-200"
      {...props}
    >
      {label}
    </button>
  );
}
