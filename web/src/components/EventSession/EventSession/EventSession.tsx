import { FC } from 'react';

import type { FindEventSessionQuery } from 'types/graphql';

import { navigate, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import DropdownMenu from 'src/components/DropdownMenu/DropdownMenu';
import { HorizontalMore } from 'src/components/Icons/Icons';

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
    if (confirm(`Are you sure you want to delete event session ${name}?`)) {
      deleteEventSession({ variables: { id } });
    }
  };

  return (
    <>
      <div className="mb-2 flex items-center justify-between">
        <h2>Event Session Details</h2>
        <DropdownMenu
          theme="alternative"
          compressed={true}
          sections={[
            {
              items: [
                {
                  onClick: () =>
                    navigate(
                      routes.editEventSession({
                        eventId,
                        id: eventSession.id,
                      })
                    ),
                  children: 'Edit',
                },
                {
                  onClick: () =>
                    onDeleteClick(eventSession.id, eventSession.name),
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

      <div className="container mx-auto">
        <div className="w-full overflow-hidden rounded-lg border border-gray-200">
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
                <td className="px-3 py-2">{eventSession.formattedStartAt}</td>
              </tr>
              <tr>
                <th className="px-3 py-2 text-right">Ends At</th>
                <td className="px-3 py-2">{eventSession.formattedEndAt}</td>
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
      </div>
    </>
  );
};

export default EventSession;
