import { FC, useState } from 'react';

import { Link, routes } from '@redwoodjs/router';

type HeaderLinkProps = {
  link: string;
  label: string;
};

type SiteHeaderProps = {
  title?: string;
  titleTo?: string;
  ctaLabel?: string;
  ctaLink?: string;
  links?: HeaderLinkProps[];
};

const HeaderLink: FC<HeaderLinkProps> = ({ link, label }) => {
  return (
    <Link
      to={link}
      className="mr-11 pr-2 cursor-pointer text-gray-900 hover:text-blue-800 font-semibold"
    >
      {label}
    </Link>
  );
};
const SiteHeader: FC<SiteHeaderProps> = ({ title = 'Event Platform', titleTo = routes.home(), links = [], ctaLabel, ctaLink }) => {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);

  return (
    <header className="w-full z-50">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row">
        <div className="flex flex-row items-center justify-between p-3 md:p-1">
          <Link
            to={titleTo}
            className="flex text-3xl font-medium mb-4 md:mb-0"
          >
            {title}
          </Link>
          <button
            className="text-black pb-4 cursor-pointer leading-none px-3 py-1 md:hidden outline-none focus:outline-none content-end ml-auto"
            type="button"
            aria-label="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="1em"
              height="1em"
            >
              <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
            </svg>
          </button>
        </div>
        <div
          className={
            'md:flex flex-grow items-center' +
            (navbarOpen ? ' flex' : ' hidden')
          }
        >
          <div className="md:ml-auto md:mr-auto font-4 pt-1 md:pl-14 pl-1 flex flex-wrap items-center md:text-base text-1xl md:justify-center justify-items-start">
            {links.map((link) => (
              <HeaderLink key={link.label} {...link} />
            ))}
          </div>
          <span className="inline-flex items-center mt-2 ml-2">
            {Boolean(ctaLabel) && (
              <Link
                to={ctaLink}
                className="px-14 py-3 border rounded-lg font-semibold tracking-tighter text-white transition duration-500 ease-in-out transform bg-transparent bg-gradient-to-r from-blue-500 to-blue-800 text-md focus:shadow-outline"
              >
                {ctaLabel}
              </Link>
            )}
          </span>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
