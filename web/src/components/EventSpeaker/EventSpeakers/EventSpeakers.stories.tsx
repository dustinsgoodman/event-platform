// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react';

import EventSpeakers from './EventSpeakers';

const meta: Meta<typeof EventSpeakers> = {
  component: EventSpeakers,
};

export default meta;

type Story = StoryObj<typeof EventSpeakers>;

export const Primary: Story = {};
