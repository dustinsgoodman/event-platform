import { Link, routes } from '@redwoodjs/router';
import { MetaTags } from '@redwoodjs/web';

import Button from 'src/components/Button/Button';
import EventSessionsCell from 'src/components/EventSession/EventSessionsCell';

type EventSessionsPageProps = {
  eventId: string;
  page?: number;
};

const EventSessionsPage = ({ eventId, page }: EventSessionsPageProps) => {
  return (
    <>
      <MetaTags title="Sessions" description="EventSessions page" />

      <div className="container mx-auto py-4">
        <div className="mb-2 flex items-center justify-between">
          <h2>Event Sessions</h2>
          <Button
            component={Link}
            to={routes.newEventSession({ eventId })}
            theme="alternative"
            size="sm"
          >
            Create New Session
          </Button>
        </div>

        <EventSessionsCell eventId={eventId} page={page} />
      </div>
    </>
  );
};

export default EventSessionsPage;
