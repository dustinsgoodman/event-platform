import { FC } from 'react';

import type { DocumentNode } from 'graphql';
import { useTranslation } from 'react-i18next';

import { navigate } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import Button from 'src/components/Button/Button';
import DropdownMenu from 'src/components/DropdownMenu/DropdownMenu';
import {
  DeleteIcon,
  EditIcon,
  HorizontalMore,
} from 'src/components/Icons/Icons';

type DetailHeaderProps = {
  mutation: DocumentNode;
  entityType: string;
  entityId: string;
  entityName: string;
  entityIndexRoute: string;
  entityEditRoute: string;
};

const DetailHeader: FC<DetailHeaderProps> = ({
  mutation,
  entityType,
  entityId,
  entityName,
  entityIndexRoute,
  entityEditRoute,
}) => {
  const { t } = useTranslation();

  const [deleteFn] = useMutation(mutation, {
    onCompleted: () => {
      toast.success(t('Entity.deleted', { entityType }));
      navigate(entityIndexRoute);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onDeleteClick = () => {
    if (
      confirm(
        t('Entity.deleteConfirmation', {
          entityType: entityType.toLowerCase(),
          entityName,
        })
      )
    ) {
      deleteFn({ variables: { id: entityId } });
    }
  };

  return (
    <div className="mb-2 flex items-center justify-between">
      <h2>{t('Entity.details', { entityType })}</h2>
      <div className="hidden gap-x-1 md:flex">
        <Button component="a" href={entityEditRoute} size="sm">
          <EditIcon />
          {t('common.edit')}
        </Button>
        <Button
          component="button"
          onClick={onDeleteClick}
          theme="red"
          size="sm"
        >
          <DeleteIcon />
          {t('common.delete')}
        </Button>
      </div>
      <div className="md:hidden">
        <DropdownMenu
          theme="alternative"
          compressed={true}
          sections={[
            {
              items: [
                {
                  onClick: () => navigate(entityEditRoute),
                  children: (
                    <>
                      <EditIcon />
                      {t('common.edit')}
                    </>
                  ),
                },
                {
                  onClick: onDeleteClick,
                  children: (
                    <>
                      <DeleteIcon />
                      {t('common.delete')}
                    </>
                  ),
                  className: 'text-red-600 hover:text-red-800',
                },
              ],
            },
          ]}
        >
          <HorizontalMore />
        </DropdownMenu>
      </div>
    </div>
  );
};

export default DetailHeader;
