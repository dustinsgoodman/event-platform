import { FC } from 'react';

import { createColumnHelper } from '@tanstack/react-table';
import { useTranslation } from 'react-i18next';
import type { EventSessionsQuery } from 'types/graphql';

import { Link, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import { QUERY } from 'src/components/EventSession/EventSessionsCell';
import Pagination from 'src/components/Pagination/Pagination';
import Table from 'src/components/Table/Table';
import TableActionMenu from 'src/components/TableActionMenu/TableActionMenu';

const DELETE_EVENT_SESSION_MUTATION = gql`
  mutation DeleteEventSessionMutation($id: UUID!) {
    deleteEventSession(id: $id) {
      id
    }
  }
`;

type EventSessionsListProps = {
  eventSessions: EventSessionsQuery['eventSessions'];
  eventId: string;
};

const EventSessionsList: FC<EventSessionsListProps> = ({
  eventSessions,
  eventId,
}) => {
  const { t } = useTranslation();

  const [deleteEventSession] = useMutation(DELETE_EVENT_SESSION_MUTATION, {
    onCompleted: () => {
      toast.success(t('Session.deleted'));
    },
    onError: (error) => {
      toast.error(error.message);
    },
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  });

  const onDeleteClick = (
    id: EventSessionsQuery['eventSessions']['nodes'][0]['id'],
    name: EventSessionsQuery['eventSessions']['nodes'][0]['name']
  ) => {
    if (confirm(t('Session.deleteConfirmation', { name }))) {
      deleteEventSession({ variables: { id } });
    }
  };

  const columnHelper =
    createColumnHelper<EventSessionsQuery['eventSessions']['nodes'][0]>();
  const columns = [
    columnHelper.accessor('name', {
      header: () => t('Session.fields.name'),
      cell: (info) => (
        <Link
          to={routes.eventSession({
            eventId: eventId,
            id: info.row.original.id,
          })}
          className="text-blue-500 hover:text-blue-800"
        >
          {info.getValue()}
        </Link>
      ),
    }),
    columnHelper.accessor('speakers', {
      header: () => t('Session.fields.speakers'),
      cell: (info) =>
        info
          .getValue()
          .map((speaker) => `${speaker.firstName} ${speaker.lastName}`)
          .join(', '),
    }),
    columnHelper.accessor('formattedStartAt', {
      header: () => t('Session.fields.startAt'),
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('formattedEndAt', {
      header: () => t('Session.fields.endAt'),
      cell: (info) => info.getValue(),
    }),
    columnHelper.display({
      id: 'actions',
      cell: (info) => (
        <TableActionMenu
          entityShowRoute={routes.eventSession({
            eventId: eventId,
            id: info.row.original.id,
          })}
          entityEditRoute={routes.editEventSession({
            eventId: eventId,
            id: info.row.original.id,
          })}
          entityDeleteFn={() =>
            onDeleteClick(info.row.original.id, info.row.original.name)
          }
        />
      ),
    }),
  ];

  return (
    <>
      <Table<EventSessionsQuery['eventSessions']['nodes'][0]>
        columns={columns}
        data={eventSessions.nodes}
      />
      <Pagination
        route={routes.eventSessions}
        paginationInfo={eventSessions.pagination}
      />
    </>
  );
};

export default EventSessionsList;
