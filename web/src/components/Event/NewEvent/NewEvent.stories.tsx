import type { Meta, StoryObj } from "@storybook/react";

import NewEvent from "./NewEvent";

const meta: Meta<typeof NewEvent> = {
  component: NewEvent,
};

export default meta;

type Story = StoryObj<typeof NewEvent>;

export const Primary: Story = {};
