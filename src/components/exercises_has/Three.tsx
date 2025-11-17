import type { PropsWithChildren } from "react";

export function RadioInputs(_props: PropsWithChildren) {
  return (
    <div className="group rounded-lg border border-slate-200 p-4">
      <h3 className="font-semibold text-slate-900">How was your experience?</h3>
      <div className="mt-3 space-y-2">
        <label className="flex items-center gap-2">
          <input type="radio" name="rating" value="good" />
          Good
        </label>
        <label className="flex items-center gap-2">
          <input type="radio" name="rating" value="poor" />
          Poor
        </label>
      </div>
      <div className="mt-4 hidden group-has-[input[value='poor']:checked]:block">
        Please tell us what went wrong
      </div>
    </div>
  );
}
