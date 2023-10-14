import { FC, useState } from 'react';

import { Trans, useTranslation } from 'react-i18next';

import { Link, navigate, routes } from '@redwoodjs/router';

import DropdownMenu from 'src/components/DropdownMenu/DropdownMenu';
import { MenuIcon, UserIcon } from 'src/components/Icons/Icons';

type HeaderLinkProps = {
  link: string;
  label: string;
};

type AdminHeaderProps = {
  title?: string;
  titleTo?: string;
  links?: HeaderLinkProps[];
};

const HeaderLink: FC<HeaderLinkProps> = ({ link, label }) => {
  return (
    <Link
      to={link}
      className="mr-11 cursor-pointer pr-2 font-semibold text-gray-900 hover:text-blue-800"
    >
      {label}
    </Link>
  );
};
const AdminHeader: FC<AdminHeaderProps> = ({
  title = 'Event Platform',
  titleTo = routes.home(),
  links = [],
}) => {
  const { t } = useTranslation();
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);

  return (
    <header className="z-50 w-full">
      <div className="container mx-auto flex flex-col flex-wrap p-5 md:flex-row">
        <div className="flex flex-row items-center justify-between p-3 md:p-1">
          <Link to={titleTo} className="mb-4 flex text-3xl font-medium md:mb-0">
            {title}
          </Link>
          <button
            className="ml-auto cursor-pointer content-end px-3 py-1 pb-4 leading-none text-black outline-none focus:outline-none md:hidden"
            type="button"
            aria-label={t('Navigation.menuAria')}
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <MenuIcon />
          </button>
        </div>
        <div
          className={
            'flex-grow items-center md:flex' +
            (navbarOpen ? ' flex' : ' hidden')
          }
        >
          <div className="font-4 text-1xl flex flex-wrap items-center justify-items-start pl-1 pt-1 md:ml-auto md:mr-auto md:justify-center md:pl-14 md:text-base">
            {links.map((link) => (
              <HeaderLink key={link.label} {...link} />
            ))}
          </div>
          <span className="ml-2 mt-2 inline-flex items-center">
            <DropdownMenu
              sections={[
                {
                  items: [
                    {
                      onClick: () => navigate(routes.events()),
                      children: t('Navigation.dashboard'),
                    },
                    {
                      onClick: () => navigate(routes.events()),
                      children: t('Navigation.events'),
                    },
                  ],
                },
                {
                  items: [
                    {
                      onClick: () => navigate(routes.home()),
                      children: t('common.logout'),
                      className: 'text-red-600 hover:text-red-800',
                    },
                  ],
                },
              ]}
              header={
                <Trans
                  i18nKey="Navigation.currentUser"
                  values={{
                    email: 'john@eventplatform.com',
                  }}
                  components={{
                    email: <div className="truncate font-medium" />,
                  }}
                />
              }
            >
              <UserIcon /> <span>John Doe</span>
            </DropdownMenu>
          </span>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
