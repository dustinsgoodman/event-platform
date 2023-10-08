import { type FC } from 'react';

import { routes } from '@redwoodjs/router';
import { MetaTags } from '@redwoodjs/web';

import EventSessionsCell from 'src/components/EventSession/EventSessionsCell';
import IndexHeader from 'src/components/IndexHeader/IndexHeader';

type EventSessionsPageProps = {
  eventId: string;
  page?: number;
};

const EventSessionsPage: FC<EventSessionsPageProps> = ({ eventId, page }) => {
  return (
    <>
      <MetaTags title="Sessions" description="EventSessions page" />

      <div className="container mx-auto py-4">
        <IndexHeader
          entityType="Session"
          entityCreateRoute={routes.newEventSession({ eventId })}
        />

        <EventSessionsCell eventId={eventId} page={page} />
      </div>
    </>
  );
};

export default EventSessionsPage;
