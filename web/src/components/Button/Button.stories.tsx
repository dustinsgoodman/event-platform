import { withActions } from '@storybook/addon-actions/decorator';
import type { Meta, StoryObj } from '@storybook/react';

import { Link } from '@redwoodjs/router';

import Button from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    actions: {
      handles: ['click .btn'],
    },
  },
  decorators: [withActions],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const DefaultButton: Story = {
  args: {
    children: 'Button',
    component: 'button',
  },
};

export const AlternativeButton: Story = {
  args: {
    ...DefaultButton.args,
    theme: 'alternative',
  },
};

export const DarkButton: Story = {
  args: {
    ...DefaultButton.args,
    theme: 'dark',
  },
};

export const LightButton: Story = {
  args: {
    ...DefaultButton.args,
    theme: 'light',
  },
};

export const GreenButton: Story = {
  args: {
    ...DefaultButton.args,
    theme: 'green',
  },
};

export const RedButton: Story = {
  args: {
    ...DefaultButton.args,
    theme: 'red',
  },
};

export const YellowButton: Story = {
  args: {
    ...DefaultButton.args,
    theme: 'yellow',
  },
};

export const PurpleButton: Story = {
  args: {
    ...DefaultButton.args,
    theme: 'purple',
  },
};

export const ExtraSmallButton: Story = {
  args: {
    ...DefaultButton.args,
    size: 'xs',
  },
};

export const SmallButton: Story = {
  args: {
    ...DefaultButton.args,
    size: 'sm',
  },
};

export const LargeButton: Story = {
  args: {
    ...DefaultButton.args,
    size: 'lg',
  },
};

export const ExtraLargeButton: Story = {
  args: {
    ...DefaultButton.args,
    size: 'xl',
  },
};

export const LinkButton: Story = {
  args: {
    children: 'HTML Link',
    component: 'a',
  },
};

export const RedwoodLinkButton: Story = {
  args: {
    children: 'Redwood Link',
    component: Link,
    to: '/',
  },
};
