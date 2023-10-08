import { FC } from 'react';

import { MetaTags } from '@redwoodjs/web';

import EventSessionCell from 'src/components/EventSession/EventSessionCell';

type EventSessionPageProps = {
  id: string;
};

const EventSessionPage: FC<EventSessionPageProps> = ({ id }) => {
  return (
    <>
      <MetaTags title="EventSession" description="EventSession page" />

      <EventSessionCell id={id} />
    </>
  );
};

export default EventSessionPage;
