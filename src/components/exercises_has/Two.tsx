import type { ComponentProps } from "react";

type Props = ComponentProps<"input"> & {
  label?: string;
  id?: string;
};

export function EmailInput({
  label = "Email Address",
  id = "email",
  required,
  ...props
}: Props) {
  return (
    <div className="rounded-lg border border-slate-200 p-4 transition-colors duration-700 has-[input:invalid]:border-rose-900 has-[input:invalid]:bg-rose-200 has-[input:valid]:border-emerald-700 has-[input:valid]:bg-emerald-300">
      <label
        className="te block text-sm font-medium text-slate-900"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        id={id}
        required
        {...props}
        className="w-ful mt-2 block rounded border border-slate-300 px-3 py-2"
      />
    </div>
  );
}
