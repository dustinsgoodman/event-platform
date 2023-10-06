import { FC } from 'react';

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

type EventSessionProps = {
  eventSession: NonNullable<FindEventSessionQuery['eventSession']>;
  eventId: string;
};

const EventSession: FC<EventSessionProps> = ({ eventSession, eventId }) => {
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
      <div className="w-full overflow-hidden rounded-lg border border-gray-200">
        <header className="bg-gray-200 px-4 py-3 text-gray-700">
          <h2 className="text-sm font-semibold">Session Details</h2>
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
                <ul className="m-0 list-none">
                  {eventSession.speakers.map((speaker) => (
                    <li key={speaker.id} className="m-0">
                      {speaker.firstName} {speaker.lastName}
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="mx-2 my-3 flex justify-center">
        <Link
          to={routes.eventSessions({ eventId })}
          className="mx-1 flex cursor-pointer justify-center rounded border-0 bg-blue-500 px-4 py-1 text-xs font-semibold uppercase leading-loose tracking-wide text-white no-underline transition duration-100 hover:bg-blue-700"
        >
          Back to Sessions
        </Link>
        <Link
          to={routes.editEventSession({
            eventId,
            id: eventSession.id,
          })}
          className="mx-1 flex cursor-pointer justify-center rounded border-0 bg-blue-500 px-4 py-1 text-xs font-semibold uppercase leading-loose tracking-wide text-white no-underline transition duration-100 hover:bg-blue-700"
        >
          Edit
        </Link>
        <button
          type="button"
          className="mx-1 flex cursor-pointer justify-center rounded border-0 bg-red-500 px-4 py-1 text-xs font-semibold uppercase leading-loose tracking-wide text-white no-underline transition duration-100 hover:bg-red-700"
          onClick={() => onDeleteClick(eventSession.id, eventSession.name)}
        >
          Delete
        </button>
      </nav>
    </div>
  );
};

export default EventSession;
