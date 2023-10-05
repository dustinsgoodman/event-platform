import type { Meta, StoryObj } from "@storybook/react";
import { routes } from "@redwoodjs/router";

import Pagination from "./Pagination";

const meta: Meta<typeof Pagination> = {
  component: Pagination,
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const FirstPage: Story = {
  args: {
    route: routes.events,
    totalPages: 4,
    currentPage: 1,
  }
};

export const MiddlePage: Story = {
  args: {
    ...FirstPage.args,
    currentPage: 2,
  }
};

export const LastPage: Story = {
  args: {
    ...FirstPage.args,
    currentPage: 4,
  }
};
