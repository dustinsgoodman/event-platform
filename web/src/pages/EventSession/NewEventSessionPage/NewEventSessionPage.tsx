import { Link, routes } from "@redwoodjs/router";
import { MetaTags } from "@redwoodjs/web";

const NewEventSessionPage = () => {
  return (
    <>
      <MetaTags title="NewEventSession" description="NewEventSession page" />

      <h1>NewEventSessionPage</h1>
      <p>
        Find me in{" "}
        <code>./web/src/pages/NewEventSessionPage/NewEventSessionPage.tsx</code>
      </p>
      <p>
        My default route is named <code>newEventSession</code>, link to me with
        `<Link to={routes.newEventSession()}>NewEventSession</Link>`
      </p>
    </>
  );
};

export default NewEventSessionPage;
