import type { EventSessionsQuery } from 'types/graphql';

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web';

import EventSessions from '../EventSessions/EventSessions';

export const QUERY = gql`
  query EventSessionsQuery($eventId: String!, $pagination: PaginationInput) {
    eventSessions(eventId: $eventId, pagination: $pagination) {
      nodes {
        id
        eventId
        name
        startAt
        endAt
        # track
        speakers {
          id
          firstName
          lastName
        }
      }
      pagination {
        totalPages
        total
        page
        perPage
      }
    }
  }
`;

export const beforeQuery = ({ eventId, page }) => {
  return {
    variables: {
      eventId,
      pagination: {
        page: page ? parseInt(page, 10) : 1,
        perPage: 25,
      },
    },
  };
};

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>Empty</div>;

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
);

export const Success = ({
  eventSessions,
}: CellSuccessProps<EventSessionsQuery>) => {
  return <EventSessions eventSessions={eventSessions} />;
};
