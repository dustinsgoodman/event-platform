import { createColumnHelper } from '@tanstack/react-table';

export type TableData = {
  id: number;
  name: string;
};

const columnHelper = createColumnHelper<TableData>();
export const standard = () => ({
  data: [
    { id: 1, name: 'A' },
    { id: 2, name: 'B' },
    { id: 3, name: 'C' },
  ],
  columns: [
    columnHelper.accessor('id', {
      header: () => 'ID',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('name', {
      header: () => 'Name',
      cell: (info) => info.getValue(),
    }),
    columnHelper.display({
      id: 'actions',
      cell: (info) => <button>press me</button>,
    }),
  ],
});
