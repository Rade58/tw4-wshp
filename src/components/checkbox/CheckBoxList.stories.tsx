import type { Meta, StoryObj } from "@storybook/react-vite";

// import { fn } from "storybook/test";

import { CheckList } from "./ChckList";

const meta = {
  title: "Components/Form/CheckList",
  component: CheckList,
  //
  argTypes: {
    items: {
      control: "object",
      description: "Array of checklist items",
    },
  },
  args: {
    items: [
      { id: "task-1", label: "First Task" },
      { id: "task-2", label: "Second Task" },
      { id: "task-3", label: "Third Task" },
    ],
  },
  //
} satisfies Meta<typeof CheckList>;

export default meta;

type Story = StoryObj<typeof meta>;

//
export const Default: Story = {
  args: {},
};
