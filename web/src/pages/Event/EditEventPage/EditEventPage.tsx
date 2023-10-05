import { MetaTags } from "@redwoodjs/web";

import EditEventCell from 'src/components/Event/EditEventCell';

type EventPageProps = {
  eventId: string;
};

const EditEventPage = ({ eventId }: EventPageProps) => {
  return (
    <>
      <MetaTags title="Edit Event" description="Edit Event page" />

      <div className="container mx-auto">
        <EditEventCell id={eventId} />
      </div>
    </>
  );
};

export default EditEventPage;
