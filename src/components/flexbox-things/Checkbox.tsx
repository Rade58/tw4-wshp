import type { PropsWithChildren } from "react";
import { PrimaryButton } from "../button";

type Props = PropsWithChildren;

export function CheckBox(_props: Props) {
  return (
    <div className="flex h-96 items-center justify-center gap-2 bg-indigo-200">
      <div className="">
        <input type="checkbox" className="" />
      </div>
      <div className="">
        <h2>Unsubscribe</h2>
        <PrimaryButton label="Click me" />
      </div>
    </div>
  );
}
