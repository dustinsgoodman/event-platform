import type { CreateEventInput } from 'types/graphql';

import { navigate, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import EventForm from 'src/components/Event/EventForm';

const CREATE_EVENT_MUTATION = gql`
  mutation CreateEventMutation($input: CreateEventInput!) {
    createEvent(input: $input) {
      id
    }
  }
`;

const NewEvent = () => {
  const [createEvent, { loading, error }] = useMutation(CREATE_EVENT_MUTATION, {
    onCompleted: () => {
      toast.success('Event created');
      navigate(routes.events());
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onSave = (input: CreateEventInput) => {
    createEvent({ variables: { input } });
  };

  return (
    <div className="w-full overflow-hidden rounded-lg border border-gray-200">
      <header className="bg-gray-200 px-4 py-3 text-gray-700">
        <h2 className="text-sm font-semibold">New Event</h2>
      </header>
      <div className="bg-gray-100 p-4">
        <EventForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default NewEvent;
