import type { Meta, StoryObj } from '@storybook/react';

import Events from './Events';
import { standard } from './Events.mock';

const meta: Meta<typeof Events> = {
  component: Events,
};

export default meta;

type Story = StoryObj<typeof Events>;

export const Primary: Story = {
  args: {
    events: standard().events,
  },
};
