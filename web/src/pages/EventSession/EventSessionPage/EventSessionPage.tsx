import { Link, routes } from "@redwoodjs/router";
import { MetaTags } from "@redwoodjs/web";

const EventSessionPage = () => {
  return (
    <>
      <MetaTags title="EventSession" description="EventSession page" />

      <h1>EventSessionPage</h1>
      <p>
        Find me in{" "}
        <code>./web/src/pages/EventSessionPage/EventSessionPage.tsx</code>
      </p>
      <p>
        My default route is named <code>eventSession</code>, link to me with `
        <Link to={routes.eventSession()}>EventSession</Link>`
      </p>
    </>
  );
};

export default EventSessionPage;
