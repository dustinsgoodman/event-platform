import { MetaTags } from "@redwoodjs/web";

import EditEventCell from 'src/components/Event/EditEventCell';

type EventPageProps = {
  id: string;
};

const EditEventPage = ({ id }: EventPageProps) => {
  return (
    <>
      <MetaTags title="Edit Event" description="Edit Event page" />

      <div className="container mx-auto">
        <EditEventCell id={id} />
      </div>
    </>
  );
};

export default EditEventPage;
