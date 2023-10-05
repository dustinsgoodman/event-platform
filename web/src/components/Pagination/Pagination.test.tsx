import { routes } from '@redwoodjs/router';
import { render } from '@redwoodjs/testing/web';

import Pagination from './Pagination';

describe('Pagination', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <Pagination
          route={routes.events}
          paginationInfo={{
            totalPages: 4,
            total: 78,
            page: 1,
            perPage: 25,
          }}
        />
      );
    }).not.toThrow();
  });
});
