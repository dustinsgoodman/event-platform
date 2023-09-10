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
      <div className="rounded-lg overflow-hidden w-full border border-gray-200 overflow-x-auto mb-4">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-200 text-gray-600 text-left">
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
                className="odd:bg-gray-50 border-t border-gray-200"
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
                  <nav className="flex justify-end items-center h-4 pr-1">
                    <Link
                      to={routes.event({ id: event.id })}
                      title={'Show event ' + event.id + ' detail'}
                      className="bg-transparent hover:bg-gray-500 hover:text-white text-xs rounded-sm py-1 px-2"
                    >
                      Show
                    </Link>
                    <Link
                      to={routes.editEvent({ id: event.id })}
                      title={'Edit event ' + event.id}
                      className="text-blue-500 hover:bg-blue-500 hover:text-white bg-transparent text-xs rounded-sm py-1 px-2 rw-button-blue"
                    >
                      Edit
                    </Link>
                    <button
                      type="button"
                      title={'Delete event ' + event.id}
                      className="text-red-600 bg-transparent hover:bg-red-600 hover:text-white text-xs rounded-sm py-1 px-2 rw-button-red"
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
