import { FC } from 'react';

import { routes } from '@redwoodjs/router';
import { MetaTags } from '@redwoodjs/web';

import EventsCell from 'src/components/Event/EventsCell';
import IndexHeader from 'src/components/IndexHeader/IndexHeader';

type Props = {
  page?: number;
};

const EventsPage: FC<Props> = ({ page }) => {
  return (
    <>
      <MetaTags title="Events" description="Events page" />

      <IndexHeader entityType="Event" entityCreateRoute={routes.newEvent()} />

      <EventsCell page={page} />
    </>
  );
};

export default EventsPage;
