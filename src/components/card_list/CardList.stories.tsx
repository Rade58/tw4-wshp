import type { Meta, StoryObj } from "@storybook/react-vite";

import { CardList } from "./CardList";

const meta = {
  title: "Components/CardList",
  component: CardList,
  //
  args: {},
  //
  argTypes: {},
} satisfies Meta<typeof CardList>;

export default meta;

type Story = StoryObj<typeof meta>;

//
export const Default: Story = {
  args: {},
};
