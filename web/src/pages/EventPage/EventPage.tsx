import { Link, routes } from '@redwoodjs/router';
import { MetaTags } from '@redwoodjs/web';

const EventPage = () => {
  return (
    <>
      <MetaTags title="Event" description="Event page" />

      <h1>EventPage</h1>
      <p>
        Find me in <code>./web/src/pages/EventPage/EventPage.tsx</code>
      </p>
      <p>
        My default route is named <code>event</code>, link to me with `
        <Link to={routes.event()}>Event</Link>`
      </p>
    </>
  );
};

export default EventPage;
