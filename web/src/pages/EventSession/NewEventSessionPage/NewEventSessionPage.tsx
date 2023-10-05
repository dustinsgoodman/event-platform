import { FC } from 'react';

import { MetaTags } from '@redwoodjs/web';

import NewEventSession from 'src/components/EventSession/NewEventSession/NewEventSession';

type NewEventSessionPageProps = {
  eventId: string;
};

const NewEventSessionPage: FC<NewEventSessionPageProps> = ({ eventId }) => {
  return (
    <>
      <MetaTags title="NewEventSession" description="NewEventSession page" />

      <NewEventSession eventId={eventId} />
    </>
  );
};

export default NewEventSessionPage;
