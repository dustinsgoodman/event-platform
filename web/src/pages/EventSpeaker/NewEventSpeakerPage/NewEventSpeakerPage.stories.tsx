import type { Meta, StoryObj } from '@storybook/react';

import NewEventSpeakerPage from './NewEventSpeakerPage';

const meta: Meta<typeof NewEventSpeakerPage> = {
  component: NewEventSpeakerPage,
};

export default meta;

type Story = StoryObj<typeof NewEventSpeakerPage>;

export const Primary: Story = {};
