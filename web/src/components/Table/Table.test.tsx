import { render } from '@redwoodjs/testing/web';

import Table from './Table';
import { standard, type TableData } from './Table.mock';

describe('Table', () => {
  it('renders successfully', () => {
    const { data, columns } = standard();

    expect(() => {
      render(<Table<TableData> data={data} columns={columns} />);
    }).not.toThrow();
  });
});
