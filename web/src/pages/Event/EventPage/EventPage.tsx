import type { FindEventById } from 'types/graphql';

import { navigate, routes } from '@redwoodjs/router';
import { MetaTags, useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import DropdownMenu from 'src/components/DropdownMenu/DropdownMenu';
import EventCell from 'src/components/Event/EventCell';
import { HorizontalMore } from 'src/components/Icons/Icons';

type EventPageProps = {
  eventId: string;
};

const DELETE_EVENT_MUTATION = gql`
  mutation DeleteEventMutation($id: String!) {
    deleteEvent(id: $id) {
      id
    }
  }
`;

const EventPage = ({ eventId }: EventPageProps) => {
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
    <>
      <MetaTags title="Event" description="Event page" />

      <div className="mb-2 flex items-center justify-between">
        <h2>Event Details</h2>
        <DropdownMenu
          theme="alternative"
          compressed={true}
          sections={[
            {
              items: [
                {
                  onClick: () => navigate(routes.editEvent({ eventId })),
                  children: 'Edit',
                },
                {
                  onClick: () => onDeleteClick(eventId, 'holder'),
                  children: 'Delete',
                  className: 'text-red-600 hover:text-red-800',
                },
              ],
            },
          ]}
        >
          <HorizontalMore />
        </DropdownMenu>
      </div>
      <EventCell id={eventId} />
    </>
  );
};

export default EventPage;
