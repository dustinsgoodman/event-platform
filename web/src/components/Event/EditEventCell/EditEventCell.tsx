import type { EditEventById, UpdateEventInput } from 'types/graphql';

import { navigate, routes } from '@redwoodjs/router';
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import EventForm from 'src/components/Event/EventForm';

export const QUERY = gql`
  query EditEventById($id: String!) {
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
  mutation UpdateEventMutation($id: String!, $input: UpdateEventInput!) {
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
  <div className="text-sm font-semibold p-4 bg-red-50 text-red-600 border border-red-100 rounded my-4">
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
    <div className="rounded-lg overflow-hidden w-full border border-gray-200">
      <header className="bg-gray-200 text-gray-700 py-3 px-4">
        <h2 className="font-semibold text-sm">Edit Event {event?.name}</h2>
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
