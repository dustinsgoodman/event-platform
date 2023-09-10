import type { Meta, StoryObj } from '@storybook/react';

import EditEventPage from './EditEventPage';

const meta: Meta<typeof EditEventPage> = {
  component: EditEventPage,
};

export default meta;

type Story = StoryObj<typeof EditEventPage>;
export const Primary: Story = {};
