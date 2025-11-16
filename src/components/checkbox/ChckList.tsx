import type { PropsWithChildren } from "react";
import { CheckBox } from "./CheckBox";

type Props = PropsWithChildren & {
  items: { id: string; label: string }[];
};

export function CheckList({ items }: Props) {
  return (
    <div className="space-y-2">
      {items.map(({ id, label }) => {
        return <CheckBox id={id} key={id} label={label} />;
      })}
    </div>
  );
}
