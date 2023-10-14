import { FC } from 'react';

import { Trans, useTranslation } from 'react-i18next';

import { navigate } from '@redwoodjs/router';

import Button from 'src/components/Button/Button';

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
  const { t } = useTranslation();
  const { totalPages, total, page: currentPage, perPage } = paginationInfo;
  const showButtons = !hideButtons && totalPages !== 1;

  let displayCount = perPage;
  if (currentPage === totalPages) {
    displayCount = total % perPage;
  }

  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex space-x-2">
        {showButtons && (
          <Button
            component="button"
            onClick={() => navigate(route({ page: currentPage - 1 }))}
            disabled={currentPage <= 1}
            size="sm"
          >
            {t('Pagination.previous')}
          </Button>
        )}
        {showButtons && (
          <Button
            component="button"
            onClick={() => navigate(route({ page: currentPage + 1 }))}
            disabled={currentPage >= totalPages}
            size="sm"
          >
            {t('Pagination.next')}
          </Button>
        )}
      </div>
      <div className="text-sm">
        <Trans
          i18nKey="Pagination.details"
          values={{
            displayCount,
            total,
          }}
          components={{ bold: <strong /> }}
        />
      </div>
    </div>
  );
};

export default Pagination;
