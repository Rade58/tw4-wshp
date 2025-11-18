import type { Meta, StoryObj } from "@storybook/react-vite";

import { Card } from "./Card";

const meta = {
  title: "Flexbox/Card",
  component: Card,
  //
  args: {
    //
    title: "Something",
    //
    description: "Lorem ipsum is the way.",
    //
  },
  //
  argTypes: {},
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

//
export const Default: Story = {
  args: {
    title: "Card Title",
    description: "This is a description for Card component.",
  },
};
