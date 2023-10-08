import type { Meta, StoryObj } from '@storybook/react';

import EditEventSpeakerPage from './EditEventSpeakerPage';

const meta: Meta<typeof EditEventSpeakerPage> = {
  component: EditEventSpeakerPage,
};

export default meta;

type Story = StoryObj<typeof EditEventSpeakerPage>;

export const Primary: Story = {};
