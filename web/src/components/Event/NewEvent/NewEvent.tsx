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
    <div className="rounded-lg overflow-hidden w-full border border-gray-200">
      <header className="bg-gray-200 text-gray-700 py-3 px-4">
        <h2 className="font-semibold text-sm">New Event</h2>
      </header>
      <div className="bg-gray-100 p-4">
        <EventForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default NewEvent;
