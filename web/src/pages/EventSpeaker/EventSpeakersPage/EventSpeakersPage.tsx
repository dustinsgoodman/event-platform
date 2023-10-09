import { type FC } from 'react';

import { routes } from '@redwoodjs/router';
import { MetaTags } from '@redwoodjs/web';

import EventSpeakersCell from 'src/components/EventSpeaker/EventSpeakersCell';
import IndexHeader from 'src/components/IndexHeader/IndexHeader';

type EventSpeakersPageProps = {
  eventId: string;
  page?: number;
};

const EventSpeakersPage: FC<EventSpeakersPageProps> = ({ eventId, page }) => {
  return (
    <>
      <MetaTags title="Speakers" description="EventSpeakers page" />

      <div className="container mx-auto py-4">
        <IndexHeader
          entityType="Speaker"
          entityCreateRoute={routes.newEventSpeaker({ eventId })}
        />
        <EventSpeakersCell eventId={eventId} page={page} />
      </div>
    </>
  );
};

export default EventSpeakersPage;
