import { FC } from 'react';

import EventsCell from 'src/components/Event/EventsCell';

type Props = {
  page: number;
};

const EventsPage: FC<Props> = ({ page }) => {
  return (
    <div className="container mx-auto">
      <EventsCell page={page} />
    </div>
  );
};

export default EventsPage;
