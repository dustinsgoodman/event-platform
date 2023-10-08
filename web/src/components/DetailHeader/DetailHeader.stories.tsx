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

import DetailHeader from './DetailHeader';

const meta: Meta<typeof DetailHeader> = {
  component: DetailHeader,
};

export default meta;

type Story = StoryObj<typeof DetailHeader>;

export const Primary: Story = {
  args: {
    mutation: gql`
      mutation DeleteEventMutation($id: String!) {
        deleteEvent(id: $id) {
          id
        }
      }
    `,
    entityType: 'Entity',
    entityId: '1234',
    entityName: 'Entity Name',
    entityIndexRoute: '/',
    entityEditRoute: '/1234/edit',
  },
};
