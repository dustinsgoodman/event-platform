import { routes } from '@redwoodjs/router';

import SiteHeader from 'src/components/SiteHeader/SiteHeader';

type AdminLayoutProps = {
  children?: React.ReactNode;
};

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <>
      <SiteHeader
        title="Event Platform"
        titleTo={routes.events()}
        ctaLabel="Log out"
        ctaLink={routes.home()}
        links={[
          {
            label: 'Create New Event',
            link: routes.newEvent(),
          },
        ]}
      />
      <div className="container mx-auto">{children}</div>
    </>
  );
};

export default AdminLayout;
