import type { PropsWithChildren } from "react";

export function GridPlayground(_props: PropsWithChildren) {
  return (
    <div className="grid gap-4 md:grid-cols-[2fr_3fr_1fr]">
      <div className="order-1 flex min-h-96 items-center justify-center rounded-md bg-sky-300 p-4 md:order-0 md:col-span-2 md:row-span-3">
        1
      </div>
      <div className="flex items-center justify-center rounded-md bg-pink-300 p-4">
        2
      </div>
      <div className="flex items-center justify-center rounded-md bg-cyan-300 p-4">
        3
      </div>
      <div className="flex items-center justify-center rounded-md bg-indigo-300 p-4">
        4
      </div>
      {/* <div className="flex items-center justify-center rounded-md bg-emerald-300 p-4">
        5
      </div>
      <div className="flex items-center justify-center rounded-md bg-amber-300 p-4">
        6
      </div>
      <div className="flex items-center justify-center rounded-md bg-rose-300 p-4">
        7
      </div>
      <div className="flex items-center justify-center rounded-md bg-violet-300 p-4">
        8
      </div>
      <div className="flex items-center justify-center rounded-md bg-lime-300 p-4">
        9
      </div> */}
    </div>
  );
}
