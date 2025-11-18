import type { PropsWithChildren } from "react";

// You got a pay attention of what is maximal width of a container where you place
// your grid
// Because breakpoints aren't for that container, they are for the overal size of screen
// for example we set up that container max width is 3xl

// Well we can fix this by using container queries that are new thing in css

// just give @ to your media queries in tailwind, and those queries from viewport will be queries for container elemnt
// and you need to add class `@container`

export function ContainerQueries(_props: PropsWithChildren) {
  // so container qon't work
  // don't forget to add @container

  // but pay attention that for example `md` and `@md` have same values as breakpoints
  // so if your container is smaller than `md` value it won't work as you expect
  return (
    <div className="@container max-w-3xl border p-2">
      <div className="grid gap-4 @md:h-screen @md:grid-cols-[10rem_1fr_5rem] @md:grid-rows-[8rem_1fr_4rem]">
        <div className="flex items-center justify-center rounded-md bg-sky-300 p-4 @md:col-span-3">
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
        <div className="flex items-center justify-center rounded-md bg-emerald-300 p-4 @md:col-span-3">
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
    </div>
  );
}
