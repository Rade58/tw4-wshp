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
      <div className="mt-4 hidden rounded bg-yellow-500 p-3 group-has-[input[value='poor']:checked]:block">
        <span className="block text-sm font-medium">
          Please tell us what went wrong
        </span>
        <textarea
          rows={2}
          className="mt-1 block w-full rounded border border-amber-700 text-sm"
        ></textarea>
      </div>
    </div>
  );
}
