import { FC } from 'react';

import { createColumnHelper } from '@tanstack/react-table';
import type { EventSessionsQuery } from 'types/graphql';

import { Link, routes, navigate } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import DropdownMenu from 'src/components/DropdownMenu/DropdownMenu';
import { QUERY } from 'src/components/Event/EventsCell';
import { VerticalMore } from 'src/components/Icons/Icons';
import Pagination from 'src/components/Pagination/Pagination';
import Table from 'src/components/Table/Table';
import { timeTag } from 'src/lib/formatters';

const DELETE_EVENT_SESSION_MUTATION = gql`
  mutation DeleteEventSessionMutation($id: String!) {
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
  const [deleteEventSession] = useMutation(DELETE_EVENT_SESSION_MUTATION, {
    onCompleted: () => {
      toast.success('Event session deleted');
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
    if (confirm(`Are you sure you want to delete event session ${name}?`)) {
      deleteEventSession({ variables: { id } });
    }
  };

  const columnHelper =
    createColumnHelper<EventSessionsQuery['eventSessions']['nodes'][0]>();
  const columns = [
    columnHelper.accessor('name', {
      header: () => 'Name',
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
      header: () => 'Speakers',
      cell: (info) =>
        info
          .getValue()
          .map((speaker) => `${speaker.firstName} ${speaker.lastName}`)
          .join(', '),
    }),
    columnHelper.accessor('startAt', {
      header: () => 'Session Starts At',
      cell: (info) => timeTag(info.getValue()),
    }),
    columnHelper.accessor('endAt', {
      header: () => 'Session Ends At',
      cell: (info) => timeTag(info.getValue()),
    }),
    columnHelper.display({
      id: 'actions',
      cell: (info) => (
        <DropdownMenu
          theme="alternative"
          compressed={true}
          sections={[
            {
              items: [
                {
                  onClick: () =>
                    navigate(
                      routes.eventSession({
                        eventId: eventId,
                        id: info.row.original.id,
                      })
                    ),
                  children: 'Show',
                },
                {
                  onClick: () =>
                    navigate(
                      routes.editEventSession({
                        eventId: eventId,
                        id: info.row.original.id,
                      })
                    ),
                  children: 'Edit',
                },
                {
                  onClick: () =>
                    onDeleteClick(info.row.original.id, info.row.original.name),
                  children: 'Delete',
                  className: 'text-red-600 hover:text-red-800',
                },
              ],
            },
          ]}
        >
          <VerticalMore />
        </DropdownMenu>
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
