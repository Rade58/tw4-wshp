import type { Meta, StoryObj } from "@storybook/react-vite";

import { InputAndTextarea } from "./Four";

const meta = {
  title: "2 :has chalenges/4",
  component: InputAndTextarea,

  argTypes: {},
  // ------------------------------------------------
  // ------------------------------------------------
  args: {},
} satisfies Meta<typeof InputAndTextarea>;

export default meta;

type Story = StoryObj<typeof meta>;

//

export const Multi_Element: Story = {
  args: {},
};
