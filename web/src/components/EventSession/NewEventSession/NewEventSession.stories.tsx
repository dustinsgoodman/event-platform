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

import NewEventSession from './NewEventSession';

const meta: Meta<typeof NewEventSession> = {
  component: NewEventSession,
};

export default meta;

type Story = StoryObj<typeof NewEventSession>;

export const Primary: Story = {};
