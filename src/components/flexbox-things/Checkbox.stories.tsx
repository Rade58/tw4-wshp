import type { Meta, StoryObj } from "@storybook/react-vite";

import { CheckBox } from "./Checkbox";

const meta = {
  title: "Flexbox/Checkbox",
  component: CheckBox,
  //
  args: {},
  //
  argTypes: {},
} satisfies Meta<typeof CheckBox>;

export default meta;

type Story = StoryObj<typeof meta>;

//
export const Default: Story = {
  args: {},
};
