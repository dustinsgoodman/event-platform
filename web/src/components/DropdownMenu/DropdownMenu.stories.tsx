import type { Meta, StoryObj } from '@storybook/react';
import clsx from 'clsx';

import { UserIcon } from '../Icons/Icons';

import DropdownMenu from './DropdownMenu';

const meta: Meta<typeof DropdownMenu> = {
  component: DropdownMenu,
  render: ({ ...args }) => (
    <div
      className={clsx('flex', {
        'justify-start': args.menuPosition === 'left',
        'justify-center': args.menuPosition === 'center',
        'justify-end': !['left', 'center'].includes(args.menuPosition),
      })}
    >
      <DropdownMenu {...args} />
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof DropdownMenu>;

export const SimpleMenu: Story = {
  args: {
    children: 'Simple Menu',
    sections: [
      {
        items: [
          {
            route: '/edit',
            children: <>Edit</>,
          },
          {
            route: '/duplicate',
            children: <>Duplicate</>,
          },
        ],
      },
    ],
  },
};

export const LeftMenu: Story = {
  args: {
    ...SimpleMenu.args,
    menuPosition: 'left',
  },
};

export const CenterMenu: Story = {
  args: {
    ...SimpleMenu.args,
    menuPosition: 'center',
  },
};

export const MenuWithHeader: Story = {
  args: {
    ...SimpleMenu.args,
    children: 'Menu with Header',
    header: (
      <>
        <div>Signed in as</div>
        <div className="truncate font-medium">john@eventplatform.com</div>
      </>
    ),
  },
};

export const MultiSectionMenu: Story = {
  args: {
    header: (
      <>
        <div>Signed in as</div>
        <div className="truncate font-medium">john@eventplatform.com</div>
      </>
    ),
    children: 'Multi Section Menu',
    sections: [
      {
        items: [
          {
            route: '/edit',
            children: (
              <>
                <UserIcon />
                <span>Edit</span>
              </>
            ),
          },
          {
            route: '/duplicate',
            children: <>Duplicate</>,
          },
        ],
      },
      {
        items: [
          {
            route: '/archive',
            children: <>Archive</>,
          },
          {
            route: '/move',
            children: <>Move</>,
          },
        ],
      },
    ],
  },
};
