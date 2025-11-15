import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";

import { SecondaryButton as Button } from "./SecondaryButton";

const meta = {
  title: "Components/Secondary Button",
  component: Button,
  //
  args: {
    onClick: fn(),
    //
    label: "Press",
    //
    disabled: false,
    //
  },
  //
  argTypes: {
    disabled: {
      control: "boolean",
    },

    // variant: {
    //   control: "select",
    //   options: ["primary", "secondary", "destructive"],
    // },
    //
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

//
export const SecondaryButton: Story = {
  args: {
    label: "Button",
  },
  //
  // render: () => <PrimaryButton className="bg-purple-600 text-amber-100">Hello</SillyButton>,

  //
};

//

/* export const Dark: Story = {
  // this is overriding query params
  // and in this case it will be theme
  // dark theme qill be applied for this story
  parameters: {
    themes: {
      // so we are forcing dark mode
      themeOverride: "dark",
    },
  },
};
 */
// here we are overriding  viewport
// but I don't think this reflects any query params
// to force mobile viewport
// see this: https://storybook.js.org/docs/essentials/viewport#defining-the-viewport-for-a-story
/* export const Mobile: Story = {
  globals: {
    // 👇 Override viewport for this story
    viewport: { value: "mobile1", isRotated: false },
  },
}; */
