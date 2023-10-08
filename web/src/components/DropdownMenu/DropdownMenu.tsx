import { FC, Fragment, ReactNode } from 'react';

import { Menu, Transition } from '@headlessui/react';
import clsx from 'clsx';

import { ChevronDown } from 'src/components/Icons/Icons';

type MenuLink = {
  children: ReactNode;
  onClick: () => void;
  className?: string;
};

type MenuSection = {
  items: MenuLink[];
};

type DropdownMenuProps = {
  children: ReactNode;
  sections: MenuSection[];
  header?: ReactNode;
  menuPosition?: 'left' | 'right' | 'center';
  theme?: 'default' | 'alternative';
  compressed?: boolean;
};

const DropdownMenu: FC<DropdownMenuProps> = ({
  children,
  sections,
  header,
  menuPosition = 'right',
  theme = 'default',
  compressed = false,
}) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button
        className={clsx(
          'inline-flex rounded-lg text-center font-medium hover:no-underline focus:outline-none focus:ring-4 disabled:opacity-50',
          {
            'bg-blue-700 text-white hover:bg-blue-800 hover:text-white focus:ring-blue-300':
              theme === 'default',
            'border border-gray-200 bg-white text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:ring-gray-200':
              theme === 'alternative',
            'px-3 py-2 text-sm': compressed,
            'px-5 py-2.5 text-sm': !compressed,
          }
        )}
      >
        <span className="flex items-center space-x-2">{children}</span>
        {!compressed && <ChevronDown className="-mr-1 h-5 w-5" />}
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
              'w-32': compressed,
            }
          )}
        >
          {Boolean(header) && (
            <div className="px-4 py-3 text-sm text-gray-900">{header}</div>
          )}
          {sections.map((section, sectionIndex) => (
            <div className="w-full py-2" key={`menu-section-${sectionIndex}`}>
              {section.items.map((item, itemIndex) => {
                return (
                  <Menu.Item key={`menu-item-${itemIndex}`}>
                    {({ active }) => (
                      <button
                        onClick={item.onClick}
                        className={clsx(
                          'block w-full py-2 text-sm',
                          {
                            'bg-gray-100 text-gray-900': active,
                            'text-gray-700': !active,
                          },
                          item.className
                        )}
                      >
                        <span className="flex items-center gap-x-1 px-4">
                          {item.children}
                        </span>
                      </button>
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
