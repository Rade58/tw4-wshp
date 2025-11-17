import type { ComponentProps } from "react";
import { PrimaryButton } from "../button";

type Props = ComponentProps<"input"> & {
  label?: string;
  id?: string;
};

export function One({
  label = "A very important Checkbox",
  id = "checkbox",
  checked: _checked,

  ...props
}: Props) {
  return (
    <div className="group flex flex-wrap items-center gap-3 rounded-lg border border-slate-200 p-4 has-[input:checked]:border-emerald-800 has-[input:checked]:bg-emerald-300">
      <input
        className="h-4 w-4 accent-indigo-800"
        type="checkbox"
        id={id}
        {...props}
      />
      <label className="" htmlFor={id}>
        {label}
      </label>
      <div className="hidden w-full gap-4 group-has-[input[type='checkbox']:checked]:flex">
        <input
          type="text"
          className="border border-slate-600 px-2 py-3"
          required
        />
        <PrimaryButton
          label="Submit"
          className="hidden group-has-[input[type='text']:valid]:block"
        />
      </div>
    </div>
  );
}
