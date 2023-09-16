import type { Meta, StoryObj } from '@storybook/react';

import EventSpeakersPage from './EventSpeakersPage';

const meta: Meta<typeof EventSpeakersPage> = {
  component: EventSpeakersPage,
};

export default meta;

type Story = StoryObj<typeof EventSpeakersPage>;

export const Primary: Story = {};
