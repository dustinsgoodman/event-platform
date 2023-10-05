import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'


type TableProps<T> = {
  columns: ColumnDef<T, unknown>[];
  data: T[];
}

const Table = <T,>({ columns, data }: TableProps<T>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="rounded-lg overflow-hidden w-full border border-gray-200 overflow-x-auto mb-4">
        <table className="w-full text-sm">
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id} className="bg-gray-200 text-gray-600 text-left">
                {headerGroup.headers.map(header => (
                  <th key={header.id} className="p-3">{flexRender(header.column.columnDef.header, header.getContext())}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id} className="odd:bg-gray-50 border-t border-gray-200">
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id} className="p-3">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  );
};

export default Table;
