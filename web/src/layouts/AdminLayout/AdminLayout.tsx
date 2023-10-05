import { routes } from '@redwoodjs/router';

import AdminHeader from 'src/components/AdminHeader/AdminHeader';

type AdminLayoutProps = {
  children?: React.ReactNode;
};

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <>
      <AdminHeader
        title="Event Platform"
        titleTo={routes.events()}
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
