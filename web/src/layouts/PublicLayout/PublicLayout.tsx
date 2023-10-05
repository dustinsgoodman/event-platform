import PublicHeader from 'src/components/PublicHeader/PublicHeader';
import SiteFooter from 'src/components/SiteFooter/SiteFooter';

type PublicLayoutProps = {
  children?: React.ReactNode;
};

const PublicLayout = ({ children }: PublicLayoutProps) => {
  return (
    <>
      <PublicHeader />
      {children}
      <SiteFooter />
    </>
  );
};

export default PublicLayout;
