import type { PropsWithChildren } from "react";

export function CoupleInputs(_props: PropsWithChildren) {
  return (
    <div className="rounded-lg border-2 border-slate-300 p-6 text-center has-[input[type='file']]:border-dashed has-[input[type='file']:focus]:border-amber-600 has-[input[type='file']:focus]:bg-amber-200 has-[input[type='text']:focus]:border-emerald-600 has-[input[type='text']:focus]:bg-indigo-500">
      <div className="space-y-3">
        <input
          type="text"
          placeholder="Enter URL"
          className="block w-full rounded border border-slate-300 px-3 py-2 text-sm"
        />
        <div className="text-sm text-slate-500">or</div>
        <input type="file" className="block w-full text-sm" />
      </div>
    </div>
  );
}
