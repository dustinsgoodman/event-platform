import { FC } from 'react';

import { Link, routes } from '@redwoodjs/router';

type FooterLinkProps = {
  link: string;
  label: string;
};

const FooterLink: FC<FooterLinkProps> = ({ link, label }) => {
  return (
    <Link
      to={link}
      className="text-md hover:text-gray-400 transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
    >
      {label}
    </Link>
  );
};

const SiteFooter = () => {
  const currentYear = new Date().getFullYear();
  const footerLinks: FooterLinkProps[] = [
    {
      link: routes.home(),
      label: 'Terms of Service',
    },
    {
      link: routes.home(),
      label: 'Privacy Policy',
    },
    {
      link: routes.home(),
      label: 'Cookie Policy',
    },
  ];

  return (
    <footer className="pb-4 text-gray-900">
      <div className="max-w-5xl xl:max-w-5xl mx-auto divide-y divide-gray-900 px-4 sm:px-6 md:px-8">
        <div className="flex flex-col-reverse justify-between pt-5 pb-4 border-t lg:flex-row bg-top border-black">
          <ul className="flex flex-col space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            {footerLinks.map((footerLink) => (
              <li key={footerLink.label}>
                <FooterLink {...footerLink} />
              </li>
            ))}
          </ul>
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
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
