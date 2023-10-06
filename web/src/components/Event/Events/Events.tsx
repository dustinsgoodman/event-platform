import { createColumnHelper } from '@tanstack/react-table';
import type { FindEvents } from 'types/graphql';

import { Link, navigate, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import DropdownMenu from 'src/components/DropdownMenu/DropdownMenu';
import { QUERY } from 'src/components/Event/EventsCell';
import { VerticalMore } from 'src/components/Icons/Icons';
import Pagination from 'src/components/Pagination/Pagination';
import Table from 'src/components/Table/Table';
import { timeTag } from 'src/lib/formatters';

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
      cell: (info) => (
        <Link
          to={routes.event({ eventId: info.row.original.id })}
          className="text-blue-500 hover:text-blue-800"
        >
          {info.getValue()}
        </Link>
      ),
    }),
    columnHelper.accessor('formattedStartAt', {
      header: () => 'Event Starts At',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('formattedEndAt', {
      header: () => 'Event Ends At',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('formattedRegistrationStartAt', {
      header: () => 'Registration Starts At',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('formattedRegistrationEndAt', {
      header: () => 'Registration Ends At',
      cell: (info) => info.getValue(),
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
                    navigate(routes.event({ eventId: info.row.original.id })),
                  children: 'Show',
                },
                {
                  onClick: () =>
                    navigate(
                      routes.editEvent({ eventId: info.row.original.id })
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
      <Table<FindEvents['events']['nodes'][0]>
        columns={columns}
        data={events.nodes}
      />
      <Pagination route={routes.events} paginationInfo={events.pagination} />
    </>
  );
};

export default EventsList;
