import type { Meta, StoryObj } from "@storybook/react-vite";

import { InputWithButton } from "./InputWithButton";

const meta = {
  title: "Focus Within and has-user-invalid:/Input With Button",
  component: InputWithButton,

  argTypes: {},
  // ------------------------------------------------
  // ------------------------------------------------
  args: {},
} satisfies Meta<typeof InputWithButton>;

export default meta;

type Story = StoryObj<typeof meta>;

//

export const Input_With_Button: Story = {
  args: {},
};
