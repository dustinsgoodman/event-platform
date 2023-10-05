import { FC } from 'react';

import { CreateEventSessionInput } from 'types/graphql';

import { navigate, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import EventSessionForm from '../EventSessionForm/EventSessionForm';

const CREATE_EVENT_SESSION_MUTATION = gql`
  mutation CreateEventSessionMutation($input: CreateEventSessionInput!) {
    createEventSession(input: $input) {
      id
    }
  }
`;

type NewEventSessionProps = {
  eventId: CreateEventSessionInput['eventId'];
};

const NewEventSession: FC<NewEventSessionProps> = ({ eventId }) => {
  const [createEventSession, { loading, error }] = useMutation(
    CREATE_EVENT_SESSION_MUTATION,
    {
      onCompleted: () => {
        toast.success('Event session created');
        navigate(routes.eventSessions({ eventId }));
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );

  const onSave = (input: CreateEventSessionInput) => {
    createEventSession({ variables: { input } });
  };

  return (
    <div className="w-full overflow-hidden rounded-lg border border-gray-200">
      <header className="bg-gray-200 px-4 py-3 text-gray-700">
        <h2 className="text-sm font-semibold">New Event Session</h2>
      </header>
      <div className="bg-gray-100 p-4">
        <EventSessionForm
          eventId={eventId}
          onSave={onSave}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  );
};

export default NewEventSession;
