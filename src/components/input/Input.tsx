import type { ComponentProps } from "react";

type Props = ComponentProps<"input"> & {
  label: string;
  id?: string;
  description?: string;
  error?: string;
};

export function Input({
  label,
  id = "input",
  description,
  error,
  ...props
}: Props) {
  const _descriptionId = description ? `${id}-description` : undefined;
  const _errorId = error ? `${id}-error` : undefined;

  return (
    <div className="space-y-1">
      <label className="block font-medium text-slate-900" htmlFor={id}>
        {label}
      </label>
      <input
        className="block w-full rounded bg-white px-2 py-1 placeholder-slate-500 outline-2 outline-slate-600 placeholder:font-light user-invalid:outline-2 user-invalid:outline-red-400 focus:outline-3 focus:outline-cyan-700"
        id={id}
        aria-describedby={_descriptionId}
        aria-errormessage={_errorId}
        aria-invalid={!!error}
        {...props}
      />
      {description ? (
        <p id={_descriptionId}>{description}</p>
      ) : (
        <p id={_errorId}>{error}</p>
      )}
    </div>
  );
}
