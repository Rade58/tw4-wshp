import type { Meta, StoryObj } from "@storybook/react-vite";

import { GridExercise } from "./GridExercise";

const meta = {
  title: "Grid/Exercise",
  component: GridExercise,
  //
  args: {},
  //
  argTypes: {},
} satisfies Meta<typeof GridExercise>;

export default meta;

type Story = StoryObj<typeof meta>;

//
export const Default: Story = {
  args: {},
};
