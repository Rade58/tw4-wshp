import type { Meta, StoryObj } from "@storybook/react-vite";

import { RadioInputs } from "./Three";

const meta = {
  title: "2 :has chalenges/3",
  component: RadioInputs,

  argTypes: {},
  // ------------------------------------------------
  // ------------------------------------------------
  args: {},
} satisfies Meta<typeof RadioInputs>;

export default meta;

type Story = StoryObj<typeof meta>;

//

export const Radios: Story = {
  args: {},
};
