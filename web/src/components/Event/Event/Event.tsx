import { type FC } from 'react';

import { useTranslation } from 'react-i18next';
import type { FindEventById } from 'types/graphql';

import { routes } from '@redwoodjs/router';

import DetailHeader from 'src/components/DetailHeader/DetailHeader';

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
  const { t } = useTranslation();

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
                <th className="px-3 py-2 text-right">{t('Event.fields.id')}</th>
                <td className="px-3 py-2">{event.id}</td>
              </tr>
              <tr>
                <th className="px-3 py-2 text-right">
                  {t('Event.fields.name')}
                </th>
                <td className="px-3 py-2">{event.name}</td>
              </tr>
              <tr>
                <th className="px-3 py-2 text-right">
                  {t('Event.fields.description')}
                </th>
                <td className="px-3 py-2">{event.description}</td>
              </tr>
              <tr>
                <th className="px-3 py-2 text-right">
                  {t('Event.fields.timezone')}
                </th>
                <td className="px-3 py-2">{event.timezone}</td>
              </tr>
              <tr>
                <th className="px-3 py-2 text-right">
                  {t('Event.fields.startAt')}
                </th>
                <td className="px-3 py-2">{event.formattedStartAt}</td>
              </tr>
              <tr>
                <th className="px-3 py-2 text-right">
                  {t('Event.fields.endAt')}
                </th>
                <td className="px-3 py-2">{event.formattedEndAt}</td>
              </tr>
              <tr>
                <th className="px-3 py-2 text-right">
                  {t('Event.fields.venueType')}
                </th>
                <td className="px-3 py-2">
                  {t(`Event.venueType.${event.venueType}`)}
                </td>
              </tr>
              <tr>
                <th className="px-3 py-2 text-right">
                  {t('Event.fields.venueName')}
                </th>
                <td className="px-3 py-2">{event.venueName}</td>
              </tr>
              <tr>
                <th className="px-3 py-2 text-right">
                  {t('Event.fields.address')}
                </th>
                <td className="px-3 py-2">{event.address}</td>
              </tr>
              <tr>
                <th className="px-3 py-2 text-right">
                  {t('Event.fields.country')}
                </th>
                <td className="px-3 py-2">{event.country}</td>
              </tr>
              <tr>
                <th className="px-3 py-2 text-right">
                  {t('Event.fields.city')}
                </th>
                <td className="px-3 py-2">{event.city}</td>
              </tr>
              <tr>
                <th className="px-3 py-2 text-right">
                  {t('Event.fields.stateOrProvince')}
                </th>
                <td className="px-3 py-2">{event.stateOrProvince}</td>
              </tr>
              <tr>
                <th className="px-3 py-2 text-right">
                  {t('Event.fields.postalCode')}
                </th>
                <td className="px-3 py-2">{event.postalCode}</td>
              </tr>
              <tr>
                <th className="px-3 py-2 text-right">
                  {t('Event.fields.registrationStartAt')}
                </th>
                <td className="px-3 py-2">
                  {event.formattedRegistrationStartAt}
                </td>
              </tr>
              <tr>
                <th className="px-3 py-2 text-right">
                  {t('Event.fields.registrationEndAt')}
                </th>
                <td className="px-3 py-2">
                  {event.formattedRegistrationEndAt}
                </td>
              </tr>
              <tr>
                <th className="px-3 py-2 text-right">
                  {t('Event.fields.currency')}
                </th>
                <td className="px-3 py-2">{event.currency}</td>
              </tr>
              <tr>
                <th className="px-3 py-2 text-right">
                  {t('Event.fields.capacity')}
                </th>
                <td className="px-3 py-2">{event.capacity}</td>
              </tr>
              <tr>
                <th className="px-3 py-2 text-right">
                  {t('Event.fields.createdAt')}
                </th>
                <td className="px-3 py-2">{event.formattedCreatedAt}</td>
              </tr>
              <tr>
                <th className="px-3 py-2 text-right">
                  {t('Event.fields.updatedAt')}
                </th>
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
