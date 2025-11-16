import type { ComponentProps } from "react";

type Props = ComponentProps<"input"> & {
  label?: string;
  id?: string;
};

export function CheckBox({
  label = "A very important Checkbox",
  id = "checkbox",
  ...props
}: Props) {
  return (
    <div className="rounded border bg-slate-200 p-4 outline-1 outline-offset-2 outline-sky-200 focus-within:bg-sky-300 focus-within:outline-indigo-700">
      <input className="accent-indigo-800" type="checkbox" id={id} {...props} />
      <label className="ml-2" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}
