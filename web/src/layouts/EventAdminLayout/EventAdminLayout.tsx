import { routes, useParams } from '@redwoodjs/router';

import AdminHeader from 'src/components/AdminHeader/AdminHeader';

type EventAdminLayoutProps = {
  children?: React.ReactNode;
};

const EventAdminLayout = ({ children }: EventAdminLayoutProps) => {
  const { eventId } = useParams();
  return (
    <>
      <AdminHeader
        title="Event Dashboard"
        titleTo={routes.event({ eventId: eventId })}
        links={[
          {
            label: 'Sessions',
            link: routes.eventSessions({ eventId: eventId }),
          },
          {
            label: 'Speakers',
            link: routes.eventSpeakers({ eventId: eventId }),
          },
          {
            label: 'Registrants',
            link: routes.eventRegistrants({ eventId: eventId }),
          },
        ]}
      />
      <div className="container mx-auto">{children}</div>
    </>
  );
};

export default EventAdminLayout;
