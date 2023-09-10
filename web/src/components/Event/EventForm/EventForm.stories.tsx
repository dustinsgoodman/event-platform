import type { Meta, StoryObj } from "@storybook/react";

import EventForm from "./EventForm";
import { standard } from "./EventForm.mock";

const meta: Meta<typeof EventForm> = {
  component: EventForm,
};

export default meta;

type Story = StoryObj<typeof EventForm>;

export const EmptyForm: Story = {
  args: {
    event: null,
  },
};

export const PrefilledForm: Story = {
  args: {
    event: standard().event,
  },
};
