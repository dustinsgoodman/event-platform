import { FC } from 'react';

import { Link, routes } from '@redwoodjs/router';
import { MetaTags } from '@redwoodjs/web';

import Button from 'src/components/Button/Button';
import EventsCell from 'src/components/Event/EventsCell';

type Props = {
  page?: number;
};

const EventsPage: FC<Props> = ({ page }) => {
  return (
    <>
      <MetaTags title="Events" description="Events page" />

      <div className="container mx-auto py-4">
        <div className="mb-2 flex items-center justify-between">
          <h2>My Events</h2>
          <Button
            component={Link}
            to={routes.newEvent()}
            theme="alternative"
            size="sm"
          >
            Create New Event
          </Button>
        </div>
        <EventsCell page={page} />
      </div>
    </>
  );
};

export default EventsPage;
