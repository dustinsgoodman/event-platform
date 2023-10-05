import type { Meta, StoryObj } from '@storybook/react';

import { standard } from '../EventSessionsCell/EventSessionsCell.mock';

import EventSessions from './EventSessions';

const meta: Meta<typeof EventSessions> = {
  component: EventSessions,
};

export default meta;

type Story = StoryObj<typeof EventSessions>;

export const Primary: Story = {
  args: {
    eventSessions: standard().eventSessions,
  },
};
