import type { PropsWithChildren } from "react";

export function InputAndTextarea(_props: PropsWithChildren) {
  return (
    <div className="rounded-lg border border-slate-200 p-4 transition-colors duration-1000 has-[input:focus]:border-emerald-600 has-[input:focus]:bg-indigo-500 has-[textarea:focus]:border-amber-600 has-[textarea:focus]:bg-amber-200">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium" htmlFor="foobarone">
            Subject
          </label>
          <input
            type="text"
            id="foobarone"
            className="mt-1 block w-full rounded border border-slate-300 px-3 py-2"
          />
        </div>
        <div>
          <label className="foobartwo" htmlFor="textarea-multi-one">
            Message
          </label>
          <textarea
            id="foobartwo"
            className="mt-1 block w-full rounded border border-slate-300 px-3 py-2"
            rows={2}
          ></textarea>
        </div>
      </div>
    </div>
  );
}
