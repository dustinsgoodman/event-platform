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

import IndexHeader from './IndexHeader';

const meta: Meta<typeof IndexHeader> = {
  component: IndexHeader,
};

export default meta;

type Story = StoryObj<typeof IndexHeader>;

export const Primary: Story = {};
