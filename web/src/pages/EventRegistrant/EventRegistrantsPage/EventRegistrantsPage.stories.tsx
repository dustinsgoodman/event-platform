import type { Meta, StoryObj } from "@storybook/react";

import EventRegistrantsPage from "./EventRegistrantsPage";

const meta: Meta<typeof EventRegistrantsPage> = {
  component: EventRegistrantsPage,
};

export default meta;

type Story = StoryObj<typeof EventRegistrantsPage>;

export const Primary: Story = {};
