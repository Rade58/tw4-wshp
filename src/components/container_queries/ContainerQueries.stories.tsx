import type { Meta, StoryObj } from "@storybook/react-vite";

import { ContainerQueries } from "./ContainerQueries";

const meta = {
  title: "Grid/Container Queries",
  component: ContainerQueries,
  //
  args: {},
  //
  argTypes: {},
} satisfies Meta<typeof ContainerQueries>;

export default meta;

type Story = StoryObj<typeof meta>;

//
export const Default: Story = {
  args: {},
};
