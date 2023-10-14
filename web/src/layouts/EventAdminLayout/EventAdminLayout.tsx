import { useTranslation } from 'react-i18next';

import { routes, useParams } from '@redwoodjs/router';
import { Toaster } from '@redwoodjs/web/toast';

import AdminHeader from 'src/components/AdminHeader/AdminHeader';

type EventAdminLayoutProps = {
  children?: React.ReactNode;
};

const EventAdminLayout = ({ children }: EventAdminLayoutProps) => {
  const { t } = useTranslation();
  const { eventId } = useParams();

  return (
    <>
      <Toaster toastOptions={{ duration: 6000 }} />
      <AdminHeader
        title={t('Navigation.eventDashboard')}
        titleTo={routes.event({ eventId: eventId })}
        links={[
          {
            label: t('Navigation.sessions'),
            link: routes.eventSessions({ eventId: eventId }),
          },
          {
            label: t('Navigation.speakers'),
            link: routes.eventSpeakers({ eventId: eventId }),
          },
          {
            label: t('Navigation.registrants'),
            link: routes.eventRegistrants({ eventId: eventId }),
          },
        ]}
      />
      <div className="container mx-auto py-4">{children}</div>
    </>
  );
};

export default EventAdminLayout;
