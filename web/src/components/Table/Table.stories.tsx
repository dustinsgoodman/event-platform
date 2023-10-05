import type { Meta, StoryObj } from '@storybook/react';

import Table from './Table';
import { TableData, standard } from './Table.mock';

const meta: Meta<typeof Table> = {
  component: Table,
};

export default meta;

type Story = StoryObj<typeof Table<TableData>>;

const { data, columns } = standard();
export const Primary: Story = {
  args: {
    data,
    columns,
  },
};
