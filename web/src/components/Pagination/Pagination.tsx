import { FC } from 'react';

import { navigate } from '@redwoodjs/router';

type PaginationProps = {
  route: (params: Record<string | number, unknown>) => string
  totalPages: number;
  currentPage: number;
};

const Pagination: FC<PaginationProps> = ({
  route,
  totalPages,
  currentPage,
}) => {
  return (
    <div className="flex items-center justify-center gap-4">
      <button
        onClick={() => navigate(route({ page: currentPage - 1}))}
        className="flex justify-center py-1 px-4 mx-1 border-0 rounded bg-blue-500 text-white hover:bg-blue-700 text-xs font-semibold uppercase tracking-wide leading-loose no-underline cursor-pointer transition duration-100 disabled:opacity-50"
        disabled={currentPage <= 1}
      >
        Prev
      </button>
      <div className="text-sm">
        Page {currentPage} of {totalPages}
      </div>
      <button
        onClick={() => navigate(route({ page: currentPage + 1}))}
        className="flex justify-center py-1 px-4 mx-1 border-0 rounded bg-blue-500 text-white hover:bg-blue-700 text-xs font-semibold uppercase tracking-wide leading-loose no-underline cursor-pointer transition duration-100 disabled:opacity-50"
        disabled={currentPage >= totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
