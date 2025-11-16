import type { Meta, StoryObj } from "@storybook/react-vite";

// import { fn } from "storybook/test";

import { CheckBox } from "./CheckBox";

const meta = {
  title: "Components/Form/CheckBox",
  component: CheckBox,
  //
  argTypes: {
    label: {
      control: "text",
      description: "Checkbox label",
    },
    id: {
      control: "text",
      description: "Checkbox ID",
    },
    checked: {
      control: "boolean",
      description: "Checkbox checked state",
    },
  },
  args: {
    label: "A very important checkbox",
    id: "checkbox",
    checked: false,
  },
  //
} satisfies Meta<typeof CheckBox>;

export default meta;

type Story = StoryObj<typeof meta>;

//
export const Default: Story = {
  args: {},
};
