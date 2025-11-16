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
    <div>
      <label htmlFor={id}>{label}</label>
      <input
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
