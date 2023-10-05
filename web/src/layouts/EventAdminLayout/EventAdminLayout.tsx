import { routes, useParams } from "@redwoodjs/router";
import SiteHeader from "src/components/SiteHeader/SiteHeader";

type EventAdminLayoutProps = {
  children?: React.ReactNode;
};

const EventAdminLayout = ({ children }: EventAdminLayoutProps) => {
  const { eventId } = useParams();
  return (
    <>
      <SiteHeader
        title="Event Dashboard"
        titleTo={routes.event({ id: eventId })}
        showLogin={false}
        links={[
          {
            label: 'Sessions',
            link: routes.eventSessions({ eventId: eventId })
          },
          // {
          //   label: 'Speakers',
          //   link: routes.eventSpeakers({ eventId: eventId })
          // },
          // {
          //   label: 'Registrants',
          //   link: routes.eventRegistrants({ eventId: eventId })
          // }
        ]}
      />
      {children}
    </>
  );
};

export default EventAdminLayout;
