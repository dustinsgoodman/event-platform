import { MetaTags } from "@redwoodjs/web";

import EventCell from 'src/components/Event/EventCell';
import EventsCell from "src/components/Event/EventsCell";
import EventSessionsCell from "src/components/EventSession/EventSessionsCell";

type EventPageProps = {
  eventId: string;
};

const EventPage = ({ eventId }: EventPageProps) => {
  return (
    <>
      <MetaTags title="Event" description="Event page" />

      <EventCell id={eventId} />
      <EventsCell />
      <EventSessionsCell eventId={eventId} />
    </>
  );
};

export default EventPage;
