import { FC } from 'react';

import type { FindEventSessionQuery } from 'types/graphql';

import { routes } from '@redwoodjs/router';

import DetailHeader from 'src/components/DetailHeader/DetailHeader';

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
  return (
    <>
      <DetailHeader
        mutation={DELETE_EVENT_SESSION_MUTATION}
        entityType="Event Session"
        entityId={eventSession.id}
        entityName={eventSession.name}
        entityIndexRoute={routes.eventSessions({ eventId })}
        entityEditRoute={routes.editEventSession({
          eventId,
          id: eventSession.id,
        })}
      />

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
