import type { Meta, StoryObj } from '@storybook/react';

import EventSpeakerPage from './EventSpeakerPage';

const meta: Meta<typeof EventSpeakerPage> = {
  component: EventSpeakerPage,
};

export default meta;

type Story = StoryObj<typeof EventSpeakerPage>;

export const Primary: Story = {};
