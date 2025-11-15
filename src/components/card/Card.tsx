import type { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  title?: string;
  description?: string;
};

export function Card({ title = "Title", description = "" }: Props) {
  return (
    <div className="rounded border border-slate-400 bg-slate-50 p-4">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="mt-1">{description}</p>
    </div>
  );
}
