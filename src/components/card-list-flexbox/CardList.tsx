import type { PropsWithChildren } from "react";
import { Card } from "../card-flexbox/Card";

type Props = PropsWithChildren;

export function CardList(_props: Props) {
  return (
    <div className="flex flex-col gap-4 p-8 md:flex-row-reverse">
      <Card
        title="Card Title"
        description="This is a description you filthy animal."
      />
      <Card
        title="Foo Bar"
        description="This is another description you georgeus person. "
      />
      <Card title="Lorem Ipsum" description="This is kinda a description." />
      <Card title="Something" description="You don't deserve a description." />
    </div>
  );
}
