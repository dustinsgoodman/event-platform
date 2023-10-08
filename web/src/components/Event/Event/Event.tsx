import { type FC } from 'react';

import type { FindEventById } from 'types/graphql';

import { routes } from '@redwoodjs/router';

import DetailHeader from 'src/components/DetailHeader/DetailHeader';
import { formatEnum } from 'src/lib/formatters';

const DELETE_EVENT_MUTATION = gql`
  mutation DeleteEventMutation($id: UUID!) {
    deleteEvent(id: $id) {
      id
    }
  }
`;

type EventProps = {
  event: NonNullable<FindEventById['event']>;
};

const Event: FC<EventProps> = ({ event }) => {
  return (
    <>
      <DetailHeader
        mutation={DELETE_EVENT_MUTATION}
        entityType="Event"
        entityId={event.id}
        entityName={event.name}
        entityIndexRoute={routes.events()}
        entityEditRoute={routes.editEvent({ eventId: event.id })}
      />

      <div className="container mx-auto">
        <div className="w-full overflow-hidden rounded-lg border border-gray-200">
          <table className="w-full text-sm">
            <tbody>
              <tr>
                <th className="px-3 py-2 text-right">ID</th>
                <td className="px-3 py-2">{event.id}</td>
              </tr>
              <tr>
                <th className="px-3 py-2 text-right">Name</th>
                <td className="px-3 py-2">{event.name}</td>
              </tr>
              <tr>
                <th className="px-3 py-2 text-right">Description</th>
                <td className="px-3 py-2">{event.description}</td>
              </tr>
              <tr>
                <th className="px-3 py-2 text-right">Timezone</th>
                <td className="px-3 py-2">{event.timezone}</td>
              </tr>
              <tr>
                <th className="px-3 py-2 text-right">Starts At</th>
                <td className="px-3 py-2">{event.formattedStartAt}</td>
              </tr>
              <tr>
                <th className="px-3 py-2 text-right">Ends At</th>
                <td className="px-3 py-2">{event.formattedEndAt}</td>
              </tr>
              <tr>
                <th className="px-3 py-2 text-right">Venue Type</th>
                <td className="px-3 py-2">{formatEnum(event.venueType)}</td>
              </tr>
              <tr>
                <th className="px-3 py-2 text-right">Venue Name</th>
                <td className="px-3 py-2">{event.venueName}</td>
              </tr>
              <tr>
                <th className="px-3 py-2 text-right">Address</th>
                <td className="px-3 py-2">{event.address}</td>
              </tr>
              <tr>
                <th className="px-3 py-2 text-right">Country</th>
                <td className="px-3 py-2">{event.country}</td>
              </tr>
              <tr>
                <th className="px-3 py-2 text-right">City</th>
                <td className="px-3 py-2">{event.city}</td>
              </tr>
              <tr>
                <th className="px-3 py-2 text-right">State/Province</th>
                <td className="px-3 py-2">{event.stateOrProvince}</td>
              </tr>
              <tr>
                <th className="px-3 py-2 text-right">Postal code</th>
                <td className="px-3 py-2">{event.postalCode}</td>
              </tr>
              <tr>
                <th className="px-3 py-2 text-right">Registration Starts At</th>
                <td className="px-3 py-2">
                  {event.formattedRegistrationStartAt}
                </td>
              </tr>
              <tr>
                <th className="px-3 py-2 text-right">Registration Ends At</th>
                <td className="px-3 py-2">
                  {event.formattedRegistrationEndAt}
                </td>
              </tr>
              <tr>
                <th className="px-3 py-2 text-right">Currency</th>
                <td className="px-3 py-2">{event.currency}</td>
              </tr>
              <tr>
                <th className="px-3 py-2 text-right">Capacity</th>
                <td className="px-3 py-2">{event.capacity}</td>
              </tr>
              <tr>
                <th className="px-3 py-2 text-right">Created At</th>
                <td className="px-3 py-2">{event.formattedCreatedAt}</td>
              </tr>
              <tr>
                <th className="px-3 py-2 text-right">Updated At</th>
                <td className="px-3 py-2">{event.formattedUpdatedAt}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Event;
