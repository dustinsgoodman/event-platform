import type { EventSpeakersQuery } from 'types/graphql';

import { useParams } from '@redwoodjs/router';
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web';

import EventSpeakers from 'src/components/EventSpeaker/EventSpeakers/EventSpeakers';

export const QUERY = gql`
  query EventSpeakersQuery($eventId: UUID!, $pagination: PaginationInput) {
    eventSpeakers(eventId: $eventId, pagination: $pagination) {
      nodes {
        id
        fullName
        firstName
        lastName
        jobTitle
        company
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
  const { eventId } = useParams();
  return <EventSpeakers eventSpeakers={eventSpeakers} eventId={eventId} />;
};
