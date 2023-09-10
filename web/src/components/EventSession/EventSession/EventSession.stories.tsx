import type { Meta, StoryObj } from "@storybook/react";

import EventSession from "./EventSession";
import { standard } from "../EventSessionCell/EventSessionCell.mock";

const meta: Meta<typeof EventSession> = {
  component: EventSession,
};

export default meta;

type Story = StoryObj<typeof EventSession>;

export const Primary: Story = {
  args: {
    eventSession: standard().eventSession,
  }
};
