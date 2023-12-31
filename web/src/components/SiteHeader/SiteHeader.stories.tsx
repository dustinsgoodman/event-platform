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

import SiteHeader from './SiteHeader';

const meta: Meta<typeof SiteHeader> = {
  component: SiteHeader,
};

export default meta;

type Story = StoryObj<typeof SiteHeader>;

export const Primary: Story = {};
