import type { Meta, StoryObj } from '@storybook/react';

import Event from './Event';
import { standard } from './Event.mock';

const meta: Meta<typeof Event> = {
  component: Event,
};

export default meta;

type Story = StoryObj<typeof Event>;

export const Primary: Story = {
  args: {
    event: standard().event,
  },
};
