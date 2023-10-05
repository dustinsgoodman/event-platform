import { Link, routes } from "@redwoodjs/router";
import { MetaTags } from "@redwoodjs/web";

const EditEventSessionPage = () => {
  return (
    <>
      <MetaTags title="EditEventSession" description="EditEventSession page" />

      <h1>EditEventSessionPage</h1>
      <p>
        Find me in{" "}
        <code>
          ./web/src/pages/EditEventSessionPage/EditEventSessionPage.tsx
        </code>
      </p>
      <p>
        My default route is named <code>editEventSession</code>, link to me with
        `<Link to={routes.editEventSession()}>EditEventSession</Link>`
      </p>
    </>
  );
};

export default EditEventSessionPage;
