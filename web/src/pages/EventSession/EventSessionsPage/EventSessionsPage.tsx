import { Link, routes } from '@redwoodjs/router';
import { MetaTags } from '@redwoodjs/web';

import EventSessionsCell from 'src/components/EventSession/EventSessionsCell';

type EventSessionsPageProps = {
  eventId: string;
  page?: number;
};

const EventSessionsPage = ({ eventId, page }: EventSessionsPageProps) => {
  return (
    <>
      <MetaTags title="Sessions" description="EventSessions page" />

      <div className="container mx-auto">
        <div className="flex flex-row items-center justify-between p-3 md:p-1">
          <h2>Sessions</h2>
          <Link
            to={routes.newEventSession({ eventId })}
            className="flex cursor-pointer justify-center rounded border-0 bg-green-500 px-4 py-1 text-xs font-semibold uppercase leading-loose tracking-wide text-white no-underline transition duration-100 hover:bg-green-700"
          >
            Create Session
          </Link>
        </div>

        <EventSessionsCell eventId={eventId} page={page} />
      </div>
    </>
  );
};

export default EventSessionsPage;
