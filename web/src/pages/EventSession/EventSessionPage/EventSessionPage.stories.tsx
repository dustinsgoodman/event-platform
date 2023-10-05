import type { Meta, StoryObj } from '@storybook/react';

import EventSessionPage from './EventSessionPage';

const meta: Meta<typeof EventSessionPage> = {
  component: EventSessionPage,
};

export default meta;

type Story = StoryObj<typeof EventSessionPage>;

export const Primary: Story = {};
