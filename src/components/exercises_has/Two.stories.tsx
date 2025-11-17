import type { Meta, StoryObj } from "@storybook/react-vite";

import { EmailInput } from "./Two";
import { fn } from "storybook/test";

const meta = {
  title: "2 :has chalenges/2",
  component: EmailInput,

  argTypes: {
    label: {
      control: "text",
      description: "The label for the input field.",
    },
    /*  description: {
      control: "text",
      description: "The description text for the input field.",
    }, */
    /* error: {
      control: "text",
      description: "The error message for the input field.",
    }, */
    type: {
      control: "select",
      options: ["text", "password", "email", "number", "url"],
      description: "The type of the input field.",
    },
    placeholder: {
      control: "text",
      description: "The placeholder text for the input field.",
    },
    required: {
      control: "boolean",
      description: "Whether the input field is required.",
    },
    disabled: {
      control: "boolean",
      description: "Whether the input field is disabled.",
    },
    readOnly: {
      control: "boolean",
      description: "Whether the input field is read-only.",
    },
    minLength: {
      control: "number",
      description: "The minimum length of the input value.",
    },
    maxLength: {
      control: "number",
      description: "The maximum length of the input value.",
    },
    pattern: {
      control: "text",
      description: "The regex pattern that the input value must match.",
    },
    title: {
      control: "text",
      description: "Tooltip title text.",
    },
    min: {
      control: "number",
      description: "The minimum value for number inputs.",
    },
    max: {
      control: "number",
      description: "The maximum value for number inputs.",
    },
    onClick: {
      action: "clicked",
      description: "Function to call when the input is clicked",
    },
  },
  // ------------------------------------------------
  // ------------------------------------------------
  args: {
    label: "Label",
    type: "text",
    placeholder: "Enter text...",
    required: false,
    disabled: false,
    readOnly: false,
    // description: "",
    // error: "",
    onClick: fn(),
  },
} satisfies Meta<typeof EmailInput>;

export default meta;

type Story = StoryObj<typeof meta>;

//

export const Email: Story = {
  args: {
    id: "email123",
    type: "email",
    label: "Email Address",
    placeholder: "Your email",
    required: true,
  },
};
