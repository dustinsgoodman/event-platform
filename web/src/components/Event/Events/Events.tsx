import type { FindEvents } from 'types/graphql';

import { Link, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import { QUERY } from 'src/components/Event/EventsCell';
import Pagination from 'src/components/Pagination/Pagination';
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

  return (
    <>
      <div className="mb-4 w-full overflow-hidden overflow-x-auto rounded-lg border border-gray-200">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-200 text-left text-gray-600">
              <th className="p-3">Name</th>
              <th className="p-3">Event Starts At</th>
              <th className="p-3">Event Ends At</th>
              <th className="p-3">Registration Starts At</th>
              <th className="p-3">Registration Ends At</th>
              <th className="p-3">&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {events.nodes.map((event) => (
              <tr
                key={event.id}
                className="border-t border-gray-200 odd:bg-gray-50"
              >
                <td className="p-3">
                  <Link
                    to={routes.event({ id: event.id })}
                    className="text-blue-500 hover:text-blue-800"
                  >
                    {event.name}
                  </Link>
                </td>
                <td className="p-3">{timeTag(event.startAt)}</td>
                <td className="p-3">{timeTag(event.endAt)}</td>
                <td className="p-3">{timeTag(event.registrationStartAt)}</td>
                <td className="p-3">{timeTag(event.registrationEndAt)}</td>
                <td className="p-3">
                  <nav className="flex h-4 items-center justify-end pr-1">
                    <Link
                      to={routes.event({ id: event.id })}
                      title={'Show event ' + event.id + ' detail'}
                      className="rounded-sm bg-transparent px-2 py-1 text-xs hover:bg-gray-500 hover:text-white"
                    >
                      Show
                    </Link>
                    <Link
                      to={routes.editEvent({ id: event.id })}
                      title={'Edit event ' + event.id}
                      className="rw-button-blue rounded-sm bg-transparent px-2 py-1 text-xs text-blue-500 hover:bg-blue-500 hover:text-white"
                    >
                      Edit
                    </Link>
                    <button
                      type="button"
                      title={'Delete event ' + event.id}
                      className="rw-button-red rounded-sm bg-transparent px-2 py-1 text-xs text-red-600 hover:bg-red-600 hover:text-white"
                      onClick={() => onDeleteClick(event.id, event.name)}
                    >
                      Delete
                    </button>
                  </nav>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        route={routes.events}
        totalPages={events.pagination.totalPages}
        currentPage={events.pagination.page}
      />
    </>
  );
};

export default EventsList;
