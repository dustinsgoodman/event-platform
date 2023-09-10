import type { FindEventById } from 'types/graphql';

import { Link, routes, navigate } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import { formatEnum, timeTag } from 'src/lib/formatters';

const DELETE_EVENT_MUTATION = gql`
  mutation DeleteEventMutation($id: String!) {
    deleteEvent(id: $id) {
      id
    }
  }
`;

interface Props {
  event: NonNullable<FindEventById['event']>;
}

const Event = ({ event }: Props) => {
  const [deleteEvent] = useMutation(DELETE_EVENT_MUTATION, {
    onCompleted: () => {
      toast.success('Event deleted');
      navigate(routes.events());
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onDeleteClick = (
    id: FindEventById['event']['id'],
    name: FindEventById['event']['name']
  ) => {
    if (confirm(`Are you sure you want to delete event ${name}?`)) {
      deleteEvent({ variables: { id } });
    }
  };

  return (
    <div className="container mx-auto">
      <div className="w-full overflow-hidden rounded-lg border border-gray-200">
        <header className="bg-gray-200 px-4 py-3 text-gray-700">
          <h2 className="text-sm font-semibold">Event Details</h2>
        </header>
        <table className="w-full text-sm">
          <tbody>
            <tr>
              <th className="px-3 py-2 text-right">ID</th>
              <td className="px-3 py-2">{event.id}</td>
            </tr>
            <tr>
              <th className="px-3 py-2 text-right">Name</th>
              <td className="px-3 py-2">{event.name}</td>
            </tr>
            <tr>
              <th className="px-3 py-2 text-right">Description</th>
              <td className="px-3 py-2">{event.description}</td>
            </tr>
            <tr>
              <th className="px-3 py-2 text-right">Timezone</th>
              <td className="px-3 py-2">{event.timezone}</td>
            </tr>
            <tr>
              <th className="px-3 py-2 text-right">Starts At</th>
              <td className="px-3 py-2">{timeTag(event.startAt)}</td>
            </tr>
            <tr>
              <th className="px-3 py-2 text-right">Ends At</th>
              <td className="px-3 py-2">{timeTag(event.endAt)}</td>
            </tr>
            <tr>
              <th className="px-3 py-2 text-right">Venue Type</th>
              <td className="px-3 py-2">{formatEnum(event.venueType)}</td>
            </tr>
            <tr>
              <th className="px-3 py-2 text-right">Venue Name</th>
              <td className="px-3 py-2">{event.venueName}</td>
            </tr>
            <tr>
              <th className="px-3 py-2 text-right">Address</th>
              <td className="px-3 py-2">{event.address}</td>
            </tr>
            <tr>
              <th className="px-3 py-2 text-right">Country</th>
              <td className="px-3 py-2">{event.country}</td>
            </tr>
            <tr>
              <th className="px-3 py-2 text-right">City</th>
              <td className="px-3 py-2">{event.city}</td>
            </tr>
            <tr>
              <th className="px-3 py-2 text-right">State/Province</th>
              <td className="px-3 py-2">{event.stateOrProvince}</td>
            </tr>
            <tr>
              <th className="px-3 py-2 text-right">Postal code</th>
              <td className="px-3 py-2">{event.postalCode}</td>
            </tr>
            <tr>
              <th className="px-3 py-2 text-right">Registration Starts At</th>
              <td className="px-3 py-2">
                {timeTag(event.registrationStartAt)}
              </td>
            </tr>
            <tr>
              <th className="px-3 py-2 text-right">Registration Ends At</th>
              <td className="px-3 py-2">{timeTag(event.registrationEndAt)}</td>
            </tr>
            <tr>
              <th className="px-3 py-2 text-right">Currency</th>
              <td className="px-3 py-2">{event.currency}</td>
            </tr>
            <tr>
              <th className="px-3 py-2 text-right">Capacity</th>
              <td className="px-3 py-2">{event.capacity}</td>
            </tr>
            <tr>
              <th className="px-3 py-2 text-right">Created At</th>
              <td className="px-3 py-2">{timeTag(event.createdAt)}</td>
            </tr>
            <tr>
              <th className="px-3 py-2 text-right">Updated At</th>
              <td className="px-3 py-2">{timeTag(event.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="mx-2 my-3 flex justify-center">
        <Link
          to={routes.editEvent({ id: event.id })}
          className="mx-1 flex cursor-pointer justify-center rounded border-0 bg-blue-500 px-4 py-1 text-xs font-semibold uppercase leading-loose tracking-wide text-white no-underline transition duration-100 hover:bg-blue-700"
        >
          Edit
        </Link>
        <button
          type="button"
          className="mx-1 flex cursor-pointer justify-center rounded border-0 bg-red-500 px-4 py-1 text-xs font-semibold uppercase leading-loose tracking-wide text-white no-underline transition duration-100 hover:bg-red-700"
          onClick={() => onDeleteClick(event.id, event.name)}
        >
          Delete
        </button>
      </nav>
    </div>
  );
};

export default Event;
