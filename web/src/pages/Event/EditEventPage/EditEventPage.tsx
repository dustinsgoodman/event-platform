import EditEventCell from 'src/components/Event/EditEventCell';

type EventPageProps = {
  id: string;
};

const EditEventPage = ({ id }: EventPageProps) => {
  return (
    <div className="container mx-auto">
      <EditEventCell id={id} />
    </div>
  );
};

export default EditEventPage;
