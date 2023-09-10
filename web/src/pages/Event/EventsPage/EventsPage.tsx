import { FC } from 'react';
import { MetaTags } from "@redwoodjs/web";

import EventsCell from 'src/components/Event/EventsCell';

type Props = {
  page?: number;
};

const EventsPage: FC<Props> = ({ page }) => {
  return (
    <>
      <MetaTags title="Events" description="Events page" />

      <div className="container mx-auto">
        <EventsCell page={page} />
      </div>
    </>
  );
};

export default EventsPage;
