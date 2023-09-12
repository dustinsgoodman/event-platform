import type { Meta, StoryObj } from "@storybook/react";

import EventAdminLayout from "./EventAdminLayout";

const meta: Meta<typeof EventAdminLayout> = {
  component: EventAdminLayout,
};

export default meta;

type Story = StoryObj<typeof EventAdminLayout>;

export const Primary: Story = {};
