import type { EditEventById, UpdateEventInput } from 'types/graphql';

import { navigate, routes } from '@redwoodjs/router';
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import EventForm from 'src/components/Event/EventForm';

export const QUERY = gql`
  query EditEventById($id: UUID!) {
    event: event(id: $id) {
      id
      name
      description
      timezone
      startAt
      endAt
      venueType
      venueName
      address
      country
      city
      stateOrProvince
      postalCode
      registrationStartAt
      registrationEndAt
      currency
      capacity
      createdAt
      updatedAt
    }
  }
`;
const UPDATE_EVENT_MUTATION = gql`
  mutation UpdateEventMutation($id: UUID!, $input: UpdateEventInput!) {
    updateEvent(id: $id, input: $input) {
      id
      name
      description
      timezone
      startAt
      endAt
      venueType
      venueName
      address
      country
      city
      stateOrProvince
      postalCode
      registrationStartAt
      registrationEndAt
      currency
      capacity
      createdAt
      updatedAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Failure = ({ error }: CellFailureProps) => (
  <div className="my-4 rounded border border-red-100 bg-red-50 p-4 text-sm font-semibold text-red-600">
    {error?.message}
  </div>
);

export const Success = ({ event }: CellSuccessProps<EditEventById>) => {
  const [updateEvent, { loading, error }] = useMutation(UPDATE_EVENT_MUTATION, {
    onCompleted: () => {
      toast.success('Event updated');
      navigate(routes.events());
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onSave = (
    input: UpdateEventInput,
    id: EditEventById['event']['id']
  ) => {
    updateEvent({ variables: { id, input } });
  };

  return (
    <div className="w-full overflow-hidden rounded-lg border border-gray-200">
      <header className="bg-gray-200 px-4 py-3 text-gray-700">
        <h2 className="text-sm font-semibold">Edit Event {event?.name}</h2>
      </header>
      <div className="bg-gray-100 p-4">
        <EventForm
          event={event}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  );
};
