import type { Meta, StoryObj } from "@storybook/react-vite";

// import { fn } from "storybook/test";

import { One } from "./One";

const meta = {
  title: "2 :has chalenges/1",
  component: One,
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
} satisfies Meta<typeof One>;

export default meta;

type Story = StoryObj<typeof meta>;

//
export const Checkbox: Story = {
  args: {
    checked: false,
    label: "I agree to the terms",
    id: "agree",
  },
};
