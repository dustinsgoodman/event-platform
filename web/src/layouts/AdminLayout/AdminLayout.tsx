import { routes } from '@redwoodjs/router';
import { Toaster } from '@redwoodjs/web/toast';

import AdminHeader from 'src/components/AdminHeader/AdminHeader';

type AdminLayoutProps = {
  children?: React.ReactNode;
};

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <>
      <Toaster toastOptions={{ duration: 6000 }} />
      <AdminHeader
        title="Event Platform"
        titleTo={routes.events()}
        links={[]}
      />
      <div className="container mx-auto py-4">{children}</div>
    </>
  );
};

export default AdminLayout;
