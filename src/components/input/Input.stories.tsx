import type { Meta, StoryObj } from "@storybook/react-vite";

import { Input } from "./Input";
import { fn } from "storybook/test";

const meta = {
  title: "Components/Form/Input",
  component: Input,

  argTypes: {
    label: {
      control: "text",
      description: "The label for the input field.",
    },
    description: {
      control: "text",
      description: "The description text for the input field.",
    },
    error: {
      control: "text",
      description: "The error message for the input field.",
    },
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
    description: "",
    error: "",
    onClick: fn(),
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

//
export const Text_Input: Story = {
  args: {
    label: "Input Label",
  },
};

export const Required: Story = {
  args: {
    required: true,
    label: "Required Input",
  },
};

export const Email: Story = {
  args: {
    type: "email",
    label: "Email Input",
    placeholder: "Your email",
  },
};

export const Input_With_Placeholder: Story = {
  args: {
    placeholder: "Enter your text here...",
  },
};

export const Input_With_Description: Story = {
  args: {
    description: "This is a description for the input field.",
    label: "Email address",
    type: "email",
    placeholder: "Give us your email address so we can send you spam.",
  },
};

export const Input_With_Error: Story = {
  args: {
    error: "This is not valid email address.",
    label: "Email address",
    type: "email",
    placeholder: "Give us your email.",
  },
};

export const Password_Input: Story = {
  args: {
    type: "password",
    label: "Password Input",
    placeholder: "Enter your password",
  },
};

export const Number_Input: Story = {
  args: {
    type: "number",
    label: "Number Input",
    placeholder: "Enter a number",
    min: 0,
    max: 100,
  },
};

export const Disabled_Input: Story = {
  args: {
    disabled: true,
    label: "Disabled Input",
    placeholder: "You can't type here",
  },
};

export const ReadOnly_Input: Story = {
  args: {
    readOnly: true,
    label: "Read-Only Input",
    placeholder: "You can't change this text",
  },
};

export const URL_Input: Story = {
  args: {
    type: "url",
    label: "Website",
    placeholder: "https://example.com",
  },
};
