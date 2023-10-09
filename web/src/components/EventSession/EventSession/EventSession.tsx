import { FC } from 'react';

import { useTranslation } from 'react-i18next';
import type { FindEventSessionQuery } from 'types/graphql';

import { routes } from '@redwoodjs/router';

import DetailHeader from 'src/components/DetailHeader/DetailHeader';

const DELETE_EVENT_SESSION_MUTATION = gql`
  mutation DeleteEventSessionMutation($id: UUID!) {
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
  const { t } = useTranslation();

  return (
    <>
      <DetailHeader
        mutation={DELETE_EVENT_SESSION_MUTATION}
        entityType={t('Session.show')}
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
                <th className="px-3 py-2 text-right">
                  {t('Session.fields.id')}
                </th>
                <td className="px-3 py-2">{eventSession.id}</td>
              </tr>
              <tr>
                <th className="px-3 py-2 text-right">
                  {t('Session.fields.name')}
                </th>
                <td className="px-3 py-2">{eventSession.name}</td>
              </tr>
              <tr>
                <th className="px-3 py-2 text-right">
                  {t('Session.fields.description')}
                </th>
                <td className="px-3 py-2">{eventSession.description}</td>
              </tr>
              <tr>
                <th className="px-3 py-2 text-right">
                  {t('Session.fields.startAt')}
                </th>
                <td className="px-3 py-2">{eventSession.formattedStartAt}</td>
              </tr>
              <tr>
                <th className="px-3 py-2 text-right">
                  {t('Session.fields.endAt')}
                </th>
                <td className="px-3 py-2">{eventSession.formattedEndAt}</td>
              </tr>
              <tr>
                <th className="px-3 py-2 text-right">
                  {t('Session.fields.capacity')}
                </th>
                <td className="px-3 py-2">{eventSession.capacity}</td>
              </tr>
              <tr>
                <th className="px-3 py-2 text-right">
                  {t('Session.fields.speakers')}
                </th>
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
