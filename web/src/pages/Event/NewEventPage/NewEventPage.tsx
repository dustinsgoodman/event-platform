import { MetaTags } from '@redwoodjs/web';

import NewEvent from 'src/components/Event/NewEvent';

const NewEventPage = () => {
  return (
    <>
      <MetaTags title="New Event" description="New Event page" />

      <NewEvent />
    </>
  );
};

export default NewEventPage;
