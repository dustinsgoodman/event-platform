import type { Meta, StoryObj } from '@storybook/react';

import { routes } from '@redwoodjs/router';

import Pagination from './Pagination';

const meta: Meta<typeof Pagination> = {
  component: Pagination,
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const FirstPage: Story = {
  args: {
    route: routes.events,
    paginationInfo: {
      totalPages: 4,
      total: 78,
      page: 1,
      perPage: 25,
    },
  },
};

export const MiddlePage: Story = {
  args: {
    ...FirstPage.args,
    paginationInfo: {
      totalPages: 4,
      total: 78,
      page: 2,
      perPage: 25,
    },
  },
};

export const LastPage: Story = {
  args: {
    ...FirstPage.args,
    paginationInfo: {
      totalPages: 4,
      total: 78,
      page: 4,
      perPage: 25,
    },
  },
};
