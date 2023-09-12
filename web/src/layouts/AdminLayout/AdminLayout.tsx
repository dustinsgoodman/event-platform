import { routes } from '@redwoodjs/router';

import SiteFooter from 'src/components/SiteFooter/SiteFooter';
import SiteHeader from 'src/components/SiteHeader/SiteHeader';

type AdminLayoutProps = {
  children?: React.ReactNode;
};

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <>
      <SiteHeader
        links={[]}
      />
      {children}
    </>
  );
};

export default AdminLayout;
