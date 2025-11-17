import type { Meta, StoryObj } from "@storybook/react-vite";

import { CoupleInputs } from "./Five";

const meta = {
  title: "2 :has chalenges/5",
  component: CoupleInputs,

  argTypes: {},
  // ------------------------------------------------
  // ------------------------------------------------
  args: {},
} satisfies Meta<typeof CoupleInputs>;

export default meta;

type Story = StoryObj<typeof meta>;

//

export const Complex: Story = {
  args: {},
};
