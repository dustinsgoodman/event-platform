import { FC } from 'react';

import { navigate } from '@redwoodjs/router';

type PaginationProps = {
  route: (params: Record<string | number, unknown>) => string;
  paginationInfo: {
    totalPages: number;
    total: number;
    page: number;
    perPage: number;
  };
  hideButtons?: boolean;
};

const Pagination: FC<PaginationProps> = ({
  route,
  paginationInfo,
  hideButtons,
}) => {
  const { totalPages, total, page: currentPage, perPage } = paginationInfo;
  const showButtons = !hideButtons && totalPages !== 1;

  let displayCount = perPage;
  if (currentPage === totalPages) {
    displayCount = total % perPage;
  }

  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        {showButtons && (
          <button
            onClick={() => navigate(route({ page: currentPage - 1 }))}
            className="mx-1 cursor-pointer justify-center rounded border-0 bg-blue-500 px-4 py-1 text-xs font-semibold uppercase leading-loose tracking-wide text-white no-underline transition duration-100 hover:bg-blue-700 disabled:opacity-50"
            disabled={currentPage <= 1}
          >
            Prev
          </button>
        )}
        {showButtons && (
          <button
            onClick={() => navigate(route({ page: currentPage + 1 }))}
            className="mx-1 cursor-pointer justify-center rounded border-0 bg-blue-500 px-4 py-1 text-xs font-semibold uppercase leading-loose tracking-wide text-white no-underline transition duration-100 hover:bg-blue-700 disabled:opacity-50"
            disabled={currentPage >= totalPages}
          >
            Next
          </button>
        )}
      </div>
      <div className="text-sm">
        Showing <strong>{displayCount}</strong> of <strong>{total}</strong>
      </div>
    </div>
  );
};

export default Pagination;
