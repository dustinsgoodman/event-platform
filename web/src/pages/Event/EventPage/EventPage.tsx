import { MetaTags } from "@redwoodjs/web";

import EventCell from 'src/components/Event/EventCell';

type EventPageProps = {
  eventId: string;
};

const EventPage = ({ eventId }: EventPageProps) => {
  return (
    <>
      <MetaTags title="Event" description="Event page" />

      <EventCell id={eventId} />
    </>
  );
};

export default EventPage;
