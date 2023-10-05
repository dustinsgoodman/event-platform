import type { FindEvents } from 'types/graphql';

import { Link, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import { createColumnHelper } from '@tanstack/react-table'

import { QUERY } from 'src/components/Event/EventsCell';
import Pagination from 'src/components/Pagination/Pagination';
import { timeTag } from 'src/lib/formatters';
import Table from 'src/components/Table/Table';

const DELETE_EVENT_MUTATION = gql`
  mutation DeleteEventMutation($id: String!) {
    deleteEvent(id: $id) {
      id
    }
  }
`;

const EventsList = ({ events }: FindEvents) => {
  const [deleteEvent] = useMutation(DELETE_EVENT_MUTATION, {
    onCompleted: () => {
      toast.success('Event deleted');
    },
    onError: (error) => {
      toast.error(error.message);
    },
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  });

  const onDeleteClick = (
    id: FindEvents['events']['nodes'][0]['id'],
    name: FindEvents['events']['nodes'][0]['name']
  ) => {
    if (confirm(`Are you sure you want to delete event ${name}?`)) {
      deleteEvent({ variables: { id } });
    }
  };

  const columnHelper = createColumnHelper<FindEvents['events']['nodes'][0]>();
  const columns = [
    columnHelper.accessor('name', {
      header: () => 'Name',
      cell: info => (
        <Link
          to={routes.event({ id: info.row.original.id })}
          className="text-blue-500 hover:text-blue-800"
        >
          {info.getValue()}
        </Link>
      )
    }),
    columnHelper.accessor('startAt', {
      header: () => 'Event Starts At',
      cell: info => timeTag(info.getValue()),
    }),
    columnHelper.accessor('endAt', {
      header: () => 'Event Ends At',
      cell: info => timeTag(info.getValue()),
    }),
    columnHelper.accessor('registrationStartAt', {
      header: () => 'Registration Starts At',
      cell: info => timeTag(info.getValue()),
    }),
    columnHelper.accessor('registrationEndAt', {
      header: () => 'Registration Ends At',
      cell: info => timeTag(info.getValue()),
    }),
    columnHelper.display({
      id: 'actions',
      cell: info => (
        <nav className="flex justify-end items-center h-4 pr-1">
          <Link
            to={routes.event({ id: info.row.original.id })}
            title={`Show event ${info.row.original.id} detail`}
            className="bg-transparent hover:bg-gray-500 hover:text-white text-xs rounded-sm py-1 px-2"
          >
            Show
          </Link>
          <Link
            to={routes.editEvent({ id: info.row.original.id })}
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
      <Table<FindEvents['events']['nodes'][0]>
        columns={columns}
        data={events.nodes}
      />
      <Pagination
        route={routes.events}
        totalPages={events.pagination.totalPages}
        currentPage={events.pagination.page}
      />
    </>
  );
};

export default EventsList;
