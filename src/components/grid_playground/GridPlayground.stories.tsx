import type { Meta, StoryObj } from "@storybook/react-vite";

import { GridPlayground } from "./GridPlayground";

const meta = {
  title: "Grid/GridPlayground",
  component: GridPlayground,
  //
  args: {},
  //
  argTypes: {},
} satisfies Meta<typeof GridPlayground>;

export default meta;

type Story = StoryObj<typeof meta>;

//
export const Default: Story = {
  args: {},
};
