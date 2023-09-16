import type { Meta, StoryObj } from '@storybook/react';

import { standard } from '../EventSessionCell/EventSessionCell.mock';

import EventSession from './EventSession';

const meta: Meta<typeof EventSession> = {
  component: EventSession,
};

export default meta;

type Story = StoryObj<typeof EventSession>;

export const Primary: Story = {
  args: {
    eventSession: standard().eventSession,
  },
};
