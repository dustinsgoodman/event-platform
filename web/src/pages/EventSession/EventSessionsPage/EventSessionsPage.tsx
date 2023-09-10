import { MetaTags } from "@redwoodjs/web";

import EventSessionsCell from 'src/components/EventSession/EventSessionsCell';

type EventSessionsPageProps = {
  eventId: string;
};

const EventSessionsPage = ({ eventId }: EventSessionsPageProps) => {
  return (
    <>
      <MetaTags title="Sessions" description="EventSessions page" />

      <div className="container mx-auto">
        <EventSessionsCell eventId={eventId} />
      </div>
    </>
  );
};

export default EventSessionsPage;
