import { MetaTags } from "@redwoodjs/web";

import EventSessionCell from "src/components/EventSession/EventSessionCell";

type EventSessionPageProps = {
  eventId: string;
  id: string;
};

const EventSessionPage = ({ eventId, id }: EventSessionPageProps) => {
  return (
    <>
      <MetaTags title="EventSession" description="EventSession page" />

      <EventSessionCell id={id} />
    </>
  );
};

export default EventSessionPage;
