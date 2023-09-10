import { FC, useState } from 'react';

import { Link, routes } from '@redwoodjs/router';

type HeaderLinkProps = {
  link: string;
  label: string;
};

type SiteHeaderProps = {
  showLogin: boolean;
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
const SiteHeader: FC<SiteHeaderProps> = ({ showLogin, links = [] }) => {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);

  return (
    <header className="z-50 w-full">
      <div className="mx-auto flex max-w-5xl flex-col flex-wrap p-5 md:flex-row">
        <div className="flex flex-row items-center justify-between p-3 md:p-1">
          <Link
            to={routes.home()}
            className="mb-4 flex text-3xl font-medium md:mb-0"
          >
            Event Platform
          </Link>
          <button
            className="ml-auto cursor-pointer content-end px-3 py-1 pb-4 leading-none text-black outline-none focus:outline-none md:hidden"
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
            'flex-grow items-center md:flex' +
            (navbarOpen ? ' flex' : ' hidden')
          }
        >
          <div className="font-4 text-1xl flex flex-wrap items-center justify-items-start pl-1 pt-1 md:ml-auto md:mr-auto md:justify-center md:pl-14 md:text-base">
            {links.map((link) => (
              <HeaderLink key={link.label} {...link} />
            ))}
          </div>
          {showLogin && (
            <Link
              to={routes.events()}
              className="text-md focus:shadow-outline ml-2 mt-2 inline-flex transform items-center rounded-lg border bg-transparent bg-gradient-to-r from-blue-500 to-blue-800 px-14 py-3 font-semibold tracking-tighter text-white transition duration-500 ease-in-out"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
