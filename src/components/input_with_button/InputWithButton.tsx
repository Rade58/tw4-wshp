import type { PropsWithChildren } from "react";

export function InputWithButton(_props: PropsWithChildren) {
  return (
    <form className="flex gap-4 rounded px-3 py-1.5 ring-indigo-400 outline outline-slate-600 focus-within:ring-2 has-user-invalid:ring-2 has-user-invalid:ring-red-600">
      <label htmlFor="new-task" className="sr-only">
        New Task
      </label>
      <input
        className="flex-1 outline-none"
        type="email"
        id="new-task"
        placeholder="New Task..."
        // required
      />
      <button
        type="button"
        className="cursor-pointer rounded bg-indigo-500 px-3 py-1.5 text-white hover:bg-indigo-400"
      >
        Submit
      </button>
    </form>
  );
}
