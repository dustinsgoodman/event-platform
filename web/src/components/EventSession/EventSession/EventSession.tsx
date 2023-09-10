import type { FindEventSessionQuery } from 'types/graphql';

import { Link, routes, navigate } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import { timeTag } from 'src/lib/formatters';

const DELETE_EVENT_SESSION_MUTATION = gql`
  mutation DeleteEventSessionMutation($id: String!) {
    deleteEventSession(id: $id) {
      id
    }
  }
`;

interface Props {
  eventSession: NonNullable<FindEventSessionQuery['eventSession']>;
}

const EventSession = ({ eventSession }: Props) => {
  const [deleteEventSession] = useMutation(DELETE_EVENT_SESSION_MUTATION, {
    onCompleted: () => {
      toast.success('Event session deleted');
      navigate(routes.events());
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onDeleteClick = (
    id: FindEventSessionQuery['eventSession']['id'],
    name: FindEventSessionQuery['eventSession']['name']
  ) => {
    if (confirm(`Are you sure you want to delete event ${name}?`)) {
      deleteEventSession({ variables: { id } });
    }
  };

  return (
    <div className="container mx-auto">
      <div className="rounded-lg overflow-hidden w-full border border-gray-200">
        <header className="bg-gray-200 text-gray-700 py-3 px-4">
          <h2 className="font-semibold text-sm">Session Details</h2>
        </header>
        <table className="w-full text-sm">
          <tbody>
            <tr>
              <th className="px-3 py-2 text-right">ID</th>
              <td className="px-3 py-2">{eventSession.id}</td>
            </tr>
            <tr>
              <th className="px-3 py-2 text-right">Name</th>
              <td className="px-3 py-2">{eventSession.name}</td>
            </tr>
            <tr>
              <th className="px-3 py-2 text-right">Description</th>
              <td className="px-3 py-2">{eventSession.description}</td>
            </tr>
            <tr>
              <th className="px-3 py-2 text-right">Starts At</th>
              <td className="px-3 py-2">{timeTag(eventSession.startAt)}</td>
            </tr>
            <tr>
              <th className="px-3 py-2 text-right">Ends At</th>
              <td className="px-3 py-2">{timeTag(eventSession.endAt)}</td>
            </tr>
            <tr>
              <th className="px-3 py-2 text-right">Capacity</th>
              <td className="px-3 py-2">{eventSession.capacity}</td>
            </tr>
            <tr>
              <th className="px-3 py-2 text-right">Speakers</th>
              <td className="px-3 py-2">
                <ul>
                  {eventSession.speakers.map((speaker) => (
                    <li key={speaker.id}>
                      {speaker.firstName} {speaker.lastName}
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="flex justify-center my-3 mx-2">
        <Link
          to={routes.eventSessions({ eventId: eventSession.eventId })}
          className="flex justify-center py-1 px-4 mx-1 border-0 rounded bg-blue-500 text-white hover:bg-blue-700 text-xs font-semibold uppercase tracking-wide leading-loose no-underline cursor-pointer transition duration-100"
        >
          Back to Sessions
        </Link>
        <Link
          to={routes.editEventSession({ eventId: eventSession.eventId, id: eventSession.id })}
          className="flex justify-center py-1 px-4 mx-1 border-0 rounded bg-blue-500 text-white hover:bg-blue-700 text-xs font-semibold uppercase tracking-wide leading-loose no-underline cursor-pointer transition duration-100"
        >
          Edit
        </Link>
        <button
          type="button"
          className="flex justify-center py-1 px-4 mx-1 border-0 rounded bg-red-500 text-white hover:bg-red-700 text-xs font-semibold uppercase tracking-wide leading-loose no-underline cursor-pointer transition duration-100"
          onClick={() => onDeleteClick(eventSession.id, eventSession.name)}
        >
          Delete
        </button>
      </nav>
    </div>
  );
};

export default EventSession;
