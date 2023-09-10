import type { EventSessionsQuery } from "types/graphql";
import type { CellSuccessProps, CellFailureProps } from "@redwoodjs/web";
import EventSessions from "../EventSessions/EventSessions";

export const QUERY = gql`
  query EventSessionsQuery($eventId: String!) {
    eventSessions(eventId: $eventId) {
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
        page
        perPage
      }
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>Empty</div>;

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: "red" }}>Error: {error?.message}</div>
);

export const Success = ({
  eventSessions,
}: CellSuccessProps<EventSessionsQuery>) => {
  return <EventSessions eventSessions={eventSessions} />;
};
