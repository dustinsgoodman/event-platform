import { FC } from 'react';

import type { DocumentNode } from 'graphql';

import { navigate } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import DropdownMenu from 'src/components/DropdownMenu/DropdownMenu';
import { HorizontalMore } from 'src/components/Icons/Icons';

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
  const [deleteFn] = useMutation(mutation, {
    onCompleted: () => {
      toast.success(`${entityType} deleted`);
      navigate(entityIndexRoute);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onDeleteClick = () => {
    if (
      confirm(
        `Are you sure you want to delete ${entityType.toLowerCase()} "${entityName}"?`
      )
    ) {
      deleteFn({ variables: { id: entityId } });
    }
  };

  return (
    <div className="mb-2 flex items-center justify-between">
      <h2>{entityType} Details</h2>
      <DropdownMenu
        theme="alternative"
        compressed={true}
        sections={[
          {
            items: [
              {
                onClick: () => navigate(entityEditRoute),
                children: 'Edit',
              },
              {
                onClick: onDeleteClick,
                children: 'Delete',
                className: 'text-red-600 hover:text-red-800',
              },
            ],
          },
        ]}
      >
        <HorizontalMore />
      </DropdownMenu>
    </div>
  );
};

export default DetailHeader;
