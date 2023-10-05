import { FC, Fragment, ReactNode } from 'react';

import { Menu, Transition } from '@headlessui/react';
import clsx from 'clsx';

import { ChevronDown } from 'src/components/Icons/Icons';

type MenuLink = {
  children: ReactNode;
  route: string;
};

type MenuSection = {
  items: MenuLink[];
};

type DropdownMenuProps = {
  children: ReactNode;
  sections: MenuSection[];
  header?: ReactNode;
  menuPosition?: 'left' | 'right' | 'center';
};

const DropdownMenu: FC<DropdownMenuProps> = ({
  children,
  sections,
  header,
  menuPosition = 'right',
}) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="inline-flex items-center space-x-2 rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300">
        <span className="flex items-center space-x-2">{children}</span>
        <ChevronDown className="-mr-1 h-5 w-5" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          static
          className={clsx(
            'absolute z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none',
            {
              'right-0': menuPosition === 'right',
              'left-0': menuPosition === 'left',
              'left-1/2 -translate-x-1/2 transform': menuPosition === 'center',
            }
          )}
        >
          {Boolean(header) && (
            <div className="px-4 py-3 text-sm text-gray-900">{header}</div>
          )}
          {sections.map((section, sectionIndex) => (
            <div className="py-2" key={`menu-section-${sectionIndex}`}>
              {section.items.map((item, itemIndex) => {
                return (
                  <Menu.Item key={`menu-item-${itemIndex}`}>
                    {({ active }) => (
                      <a
                        href={item.route}
                        className={clsx('block px-4 py-2 text-sm', {
                          'bg-gray-100 text-gray-900': active,
                          'text-gray-700': !active,
                        })}
                      >
                        <span className="flex items-center space-x-2">
                          {item.children}
                        </span>
                      </a>
                    )}
                  </Menu.Item>
                );
              })}
            </div>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default DropdownMenu;
