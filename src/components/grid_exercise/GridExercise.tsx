import type { PropsWithChildren } from "react";

// we start with mobile approach first which is grid-cols-1

export function GridExercise(_props: PropsWithChildren) {
  return (
    <div className="grid gap-4 lg:h-screen lg:grid-cols-[20rem_1fr_10rem] lg:grid-rows-[8rem_1fr_4rem]">
      <div className="flex items-center justify-center rounded-md bg-sky-300 p-4 lg:col-span-3">
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
      <div className="flex items-center justify-center rounded-md bg-emerald-300 p-4 lg:col-span-3">
        5
      </div>
      {/*
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
