import { MetaTags } from "@redwoodjs/web";

import EventCell from 'src/components/Event/EventCell';

type EventPageProps = {
  id: string;
};

const EventPage = ({ id }: EventPageProps) => {
  return (
    <>
      <MetaTags title="Event" description="Event page" />

      <EventCell id={id} />
    </>
  );
};

export default EventPage;
