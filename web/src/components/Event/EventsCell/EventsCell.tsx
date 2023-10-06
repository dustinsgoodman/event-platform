import type { FindEvents } from 'types/graphql';

import { Link, routes } from '@redwoodjs/router';
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web';

import Events from 'src/components/Event/Events';

export const QUERY = gql`
  query FindEvents($pagination: PaginationInput) {
    events(pagination: $pagination) {
      nodes {
        id
        name
        formattedStartAt
        formattedEndAt
        formattedRegistrationStartAt
        formattedRegistrationEndAt
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

export const beforeQuery = ({ page }) => {
  return {
    variables: {
      pagination: {
        page: page ? parseInt(page, 10) : 1,
        perPage: 25,
      },
    },
  };
};

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
  <div className="my-4 rounded border border-red-100 bg-red-50 p-4 text-sm font-semibold text-red-600">
    {error?.message}
  </div>
);

export const Success = ({ events }: CellSuccessProps<FindEvents>) => {
  return <Events events={events} />;
};
