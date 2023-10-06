import type {
  FindEventSessionQuery,
  FindEventSessionQueryVariables,
} from 'types/graphql';

import { useParams } from '@redwoodjs/router';
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web';

import EventSession from 'src/components/EventSession/EventSession/EventSession';

export const QUERY = gql`
  query FindEventSessionQuery($id: String!) {
    eventSession(id: $id) {
      id
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

export const Empty = () => <div>Empty</div>;

export const Failure = ({
  error,
}: CellFailureProps<FindEventSessionQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
);

export const Success = ({
  eventSession,
}: CellSuccessProps<FindEventSessionQuery, FindEventSessionQueryVariables>) => {
  const { eventId } = useParams();
  return <EventSession eventSession={eventSession} eventId={eventId} />;
};
