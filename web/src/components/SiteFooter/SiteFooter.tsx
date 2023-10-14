import { FC } from 'react';

import { useTranslation } from 'react-i18next';

import { Link, routes } from '@redwoodjs/router';

type FooterLinkProps = {
  link: string;
  label: string;
};

const FooterLink: FC<FooterLinkProps> = ({ link, label }) => {
  return (
    <Link
      to={link}
      className="text-md hover:text-deep-purple-accent-400 font-semibold transition-colors duration-300 hover:text-gray-400"
    >
      {label}
    </Link>
  );
};

const SiteFooter = () => {
  const { t } = useTranslation();

  const currentYear = new Date().getFullYear();
  const footerLinks: FooterLinkProps[] = [
    {
      link: routes.home(),
      label: t('Legal.tos'),
    },
    {
      link: routes.home(),
      label: t('Legal.privacy'),
    },
    {
      link: routes.home(),
      label: t('Legal.cookies'),
    },
  ];

  return (
    <footer className="pb-4 text-gray-900">
      <div className="mx-auto max-w-5xl divide-y divide-gray-900 px-4 sm:px-6 md:px-8 xl:max-w-5xl">
        <div className="flex flex-col-reverse justify-between border-t border-black bg-top pb-4 pt-5 lg:flex-row">
          <ul className="flex flex-col space-y-2 sm:flex-row sm:space-x-5 sm:space-y-0 lg:mb-0">
            {footerLinks.map((footerLink) => (
              <li key={footerLink.label}>
                <FooterLink {...footerLink} />
              </li>
            ))}
          </ul>
          <ul className="mb-3 flex flex-col space-y-2 sm:flex-row sm:space-x-5 sm:space-y-0 lg:mb-0">
            <span className="text-md font-semibold tracking-tight">
              © {currentYear} Event Platform, Inc.
            </span>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
