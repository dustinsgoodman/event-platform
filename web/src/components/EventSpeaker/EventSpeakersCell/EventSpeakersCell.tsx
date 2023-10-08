import type { EventSpeakersQuery } from 'types/graphql';

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web';

export const QUERY = gql`
  query EventSpeakersQuery($eventId: UUID!, $pagination: PaginationInput) {
    eventSpeakers(eventId: $eventId, pagination: $pagination) {
      nodes {
        id
        firstName
        lastName
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
  eventSpeakers,
}: CellSuccessProps<EventSpeakersQuery>) => {
  return (
    <ul>
      {eventSpeakers.nodes.map((item) => {
        return <li key={item.id}>{JSON.stringify(item)}</li>;
      })}
    </ul>
  );
};
