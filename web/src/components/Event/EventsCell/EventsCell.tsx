import type { FindEvents } from 'types/graphql';

import { Link, routes } from '@redwoodjs/router';
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web';

import Events from 'src/components/Event/Events';

export const QUERY = gql`
  query FindEvents {
    events {
      nodes {
        id
        name
        startAt
        endAt
        registrationStartAt
        registrationEndAt
      }
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => {
  return (
    <div className="text-center">
      No events yet.&nbsp;
      <Link
        to={routes.newEvent()}
        className="text-blue-400 underline hover:text-blue-500"
      >
        Create one?
      </Link>
    </div>
  );
};

export const Failure = ({ error }: CellFailureProps) => (
  <div className="text-sm font-semibold p-4 bg-red-50 text-red-600 border border-red-100 rounded my-4">
    {error?.message}
  </div>
);

export const Success = ({ events }: CellSuccessProps<FindEvents>) => {
  return <Events events={events} />;
};
