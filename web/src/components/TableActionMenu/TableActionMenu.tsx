import { type FC } from 'react';

import { useTranslation } from 'react-i18next';

import { navigate } from '@redwoodjs/router';

import DropdownMenu from 'src/components/DropdownMenu/DropdownMenu';
import { VerticalMore } from 'src/components/Icons/Icons';

type TableActionMenuProps = {
  entityShowRoute: string;
  entityEditRoute: string;
  entityDeleteFn: () => void;
};

const TableActionMenu: FC<TableActionMenuProps> = ({
  entityShowRoute,
  entityEditRoute,
  entityDeleteFn,
}) => {
  const { t } = useTranslation();

  return (
    <DropdownMenu
      theme="alternative"
      compressed={true}
      sections={[
        {
          items: [
            {
              onClick: () => navigate(entityShowRoute),
              children: t('common.show'),
            },
            {
              onClick: () => navigate(entityEditRoute),
              children: t('common.edit'),
            },
            {
              onClick: entityDeleteFn,
              children: t('common.delete'),
              className: 'text-red-600 hover:text-red-800',
            },
          ],
        },
      ]}
    >
      <VerticalMore />
    </DropdownMenu>
  );
};

export default TableActionMenu;
