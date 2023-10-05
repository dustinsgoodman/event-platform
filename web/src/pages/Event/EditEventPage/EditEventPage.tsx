import { MetaTags } from '@redwoodjs/web';

import EditEventCell from 'src/components/Event/EditEventCell';

type EventPageProps = {
  eventId: string;
};

const EditEventPage = ({ eventId }: EventPageProps) => {
  return (
    <>
      <MetaTags title="Edit Event" description="Edit Event page" />

      <EditEventCell id={eventId} />
    </>
  );
};

export default EditEventPage;
