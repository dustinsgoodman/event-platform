// Pass props to your component by passing an `args` object to your story
//
// ```jsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react';

import EventSessionForm from './EventSessionForm';

const meta: Meta<typeof EventSessionForm> = {
  component: EventSessionForm,
};

export default meta;

type Story = StoryObj<typeof EventSessionForm>;

export const Primary: Story = {};
