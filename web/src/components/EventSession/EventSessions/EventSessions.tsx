import type { EventSessionsQuery } from 'types/graphql';

import { Link, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import { createColumnHelper } from '@tanstack/react-table'

import { QUERY } from 'src/components/Event/EventsCell';
import Pagination from 'src/components/Pagination/Pagination';
import { timeTag } from 'src/lib/formatters';
import Table from 'src/components/Table/Table';

const DELETE_EVENT_SESSION_MUTATION = gql`
  mutation DeleteEventSessionMutation($id: String!) {
    deleteEventSession(id: $id) {
      id
    }
  }
`;

const EventSessionsList = ({ eventSessions }: EventSessionsQuery) => {
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

  const columnHelper = createColumnHelper<EventSessionsQuery['eventSessions']['nodes'][0]>();
  const columns = [
    columnHelper.accessor('name', {
      header: () => 'Name',
      cell: info => (
        <Link
          to={routes.eventSession({ eventId: info.row.original.eventId, id: info.row.original.id })}
          className="text-blue-500 hover:text-blue-800"
        >
          {info.getValue()}
        </Link>
      )
    }),
    columnHelper.accessor('speakers', {
      header: () => 'Speakers',
      cell: info => (
        info.getValue().map(speaker => `${speaker.firstName} ${speaker.lastName}`).join(', ')
      )
    }),
    columnHelper.accessor('startAt', {
      header: () => 'Session Starts At',
      cell: info => timeTag(info.getValue()),
    }),
    columnHelper.accessor('endAt', {
      header: () => 'Session Ends At',
      cell: info => timeTag(info.getValue()),
    }),
    columnHelper.display({
      id: 'actions',
      cell: info => (
        <nav className="flex justify-end items-center h-4 pr-1">
          <Link
            to={routes.eventSession({ eventId: info.row.original.eventId, id: info.row.original.id })}
            title={`Show event ${info.row.original.id} detail`}
            className="bg-transparent hover:bg-gray-500 hover:text-white text-xs rounded-sm py-1 px-2"
          >
            Show
          </Link>
          <Link
            to={routes.editEventSession({ eventId: info.row.original.eventId, id: info.row.original.id })}
            title={`Edit event ${info.row.original.id}`}
            className="text-blue-500 hover:bg-blue-500 hover:text-white bg-transparent text-xs rounded-sm py-1 px-2 rw-button-blue"
          >
            Edit
          </Link>
          <button
            type="button"
            title={`Delete event ${info.row.original.id}`}
            className="text-red-600 bg-transparent hover:bg-red-600 hover:text-white text-xs rounded-sm py-1 px-2 rw-button-red"
            onClick={() => onDeleteClick(info.row.original.id, info.row.original.name)}
          >
            Delete
          </button>
        </nav>
      )
    }),
  ]

  return (
    <>
      <Table<EventSessionsQuery['eventSessions']['nodes'][0]>
        columns={columns}
        data={eventSessions.nodes}
      />
      <Pagination
        route={routes.eventSessions}
        totalPages={eventSessions.pagination.totalPages}
        currentPage={eventSessions.pagination.page}
      />
    </>
  );
};

export default EventSessionsList;
