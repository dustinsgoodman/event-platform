import { FC } from 'react';

import { navigate } from '@redwoodjs/router';

type PaginationProps = {
  route: (params: Record<string | number, unknown>) => string;
  totalPages: number;
  currentPage: number;
};

const Pagination: FC<PaginationProps> = ({
  route,
  totalPages,
  currentPage,
}) => {
  const showButtons = totalPages !== 1;

  return (
    <div className="flex items-center justify-center gap-4">
      {showButtons && (
        <button
          onClick={() => navigate(route({ page: currentPage - 1 }))}
          className="mx-1 flex cursor-pointer justify-center rounded border-0 bg-blue-500 px-4 py-1 text-xs font-semibold uppercase leading-loose tracking-wide text-white no-underline transition duration-100 hover:bg-blue-700 disabled:opacity-50"
          disabled={currentPage <= 1}
        >
          Prev
        </button>
      )}
      <div className="text-sm">
        Page {currentPage} of {totalPages}
      </div>
      {showButtons && (
        <button
          onClick={() => navigate(route({ page: currentPage + 1 }))}
          className="mx-1 flex cursor-pointer justify-center rounded border-0 bg-blue-500 px-4 py-1 text-xs font-semibold uppercase leading-loose tracking-wide text-white no-underline transition duration-100 hover:bg-blue-700 disabled:opacity-50"
          disabled={currentPage >= totalPages}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
