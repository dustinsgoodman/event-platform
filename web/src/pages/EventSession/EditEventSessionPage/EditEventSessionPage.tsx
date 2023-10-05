import { FC } from 'react';

import { MetaTags } from '@redwoodjs/web';

import EditEventSessionCell from 'src/components/EventSession/EditEventSessionCell';

type EditEventSessionPageProps = {
  eventId: string;
  id: string;
};

const EditEventSessionPage: FC<EditEventSessionPageProps> = ({ id }) => {
  return (
    <>
      <MetaTags title="Edit Event Session" description="Edit event session" />

      <EditEventSessionCell id={id} />
    </>
  );
};

export default EditEventSessionPage;
