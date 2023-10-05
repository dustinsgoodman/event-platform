import type { Meta, StoryObj } from "@storybook/react";

import NewEventSessionPage from "./NewEventSessionPage";

const meta: Meta<typeof NewEventSessionPage> = {
  component: NewEventSessionPage,
};

export default meta;

type Story = StoryObj<typeof NewEventSessionPage>;

export const Primary: Story = {};
