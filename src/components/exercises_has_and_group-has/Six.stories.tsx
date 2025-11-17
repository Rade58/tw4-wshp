import type { Meta, StoryObj } from "@storybook/react-vite";

import { ExerciseSix } from "./Six";

const meta = {
  title: "2 :has chalenges/6 Extra exercise with peer:",
  component: ExerciseSix,

  argTypes: {},
  // ------------------------------------------------
  // ------------------------------------------------
  args: {},
} satisfies Meta<typeof ExerciseSix>;

export default meta;

type Story = StoryObj<typeof meta>;

//

export const Six: Story = {
  args: {},
};
