import type { ComponentProps } from "react";

type Props = ComponentProps<"input"> & {
  label?: string;
  id?: string;
};

export function One({
  label = "A very important Checkbox",
  id = "checkbox",

  ...props
}: Props) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-slate-200 p-4 has-[input:checked]:border-emerald-800 has-[input:checked]:bg-emerald-300">
      <input
        className="h-4 w-4 accent-indigo-800"
        type="checkbox"
        id={id}
        {...props}
      />
      <label className="" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}
