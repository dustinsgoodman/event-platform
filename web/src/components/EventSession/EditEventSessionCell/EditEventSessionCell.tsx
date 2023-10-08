import type {
  EditEventSessionById,
  UpdateEventSessionInput,
} from 'types/graphql';

import { navigate, routes, useParams } from '@redwoodjs/router';
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import EventSessionForm from 'src/components/EventSession/EventSessionForm/EventSessionForm';

export const QUERY = gql`
  query EditEventSessionById($id: UUID!) {
    eventSession(id: $id) {
      id
      name
      description
      startAt
      endAt
      capacity
      # track
      event {
        id
      }
      speakers {
        id
        firstName
        lastName
      }
      # TODO: add registrants with pagination
    }
  }
`;

const UPDATE_EVENT_SESSION_MUTATION = gql`
  mutation UpdateEventSessionMutation(
    $id: UUID!
    $input: UpdateEventSessionInput!
  ) {
    updateEventSession(id: $id, input: $input) {
      id
      event {
        id
      }
      name
      description
      startAt
      endAt
      capacity
      # track
      speakers {
        id
        firstName
        lastName
      }
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Failure = ({ error }: CellFailureProps) => (
  <div className="my-4 rounded border border-red-100 bg-red-50 p-4 text-sm font-semibold text-red-600">
    {error?.message}
  </div>
);

export const Success = ({
  eventSession,
}: CellSuccessProps<EditEventSessionById>) => {
  const { eventId } = useParams();
  const [updateEventSession, { loading, error }] = useMutation(
    UPDATE_EVENT_SESSION_MUTATION,
    {
      onCompleted: () => {
        toast.success('Event session updated');
        navigate(routes.eventSessions({ eventId }));
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );

  const onSave = (
    input: UpdateEventSessionInput,
    id: EditEventSessionById['eventSession']['id']
  ) => {
    updateEventSession({ variables: { id, input } });
  };

  return (
    <div className="w-full overflow-hidden rounded-lg border border-gray-200">
      <header className="bg-gray-200 px-4 py-3 text-gray-700">
        <h2 className="text-sm font-semibold">
          Edit Event {eventSession?.name}
        </h2>
      </header>
      <div className="bg-gray-100 p-4">
        <EventSessionForm
          eventSession={eventSession}
          eventId={eventId}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  );
};
