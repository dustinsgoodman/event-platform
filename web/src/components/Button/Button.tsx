import {
  FC,
  ReactNode,
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
} from 'react';

import clsx from 'clsx';

type ButtonProps = {
  component?: React.ElementType;
  href?: string;
  to?: string;
  onClick?: () => void;
  children: ReactNode;
  theme?:
    | 'default'
    | 'alternative'
    | 'dark'
    | 'light'
    | 'green'
    | 'red'
    | 'yellow'
    | 'purple';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
} & (
  | ButtonHTMLAttributes<HTMLButtonElement>
  | AnchorHTMLAttributes<HTMLAnchorElement>
);

const Button: FC<ButtonProps> = ({
  component,
  href,
  onClick,
  children,
  theme = 'default',
  size = 'md',
  ...rest
}) => {
  const RootElement = component || (href ? 'a' : 'button');

  const commonProps = {
    onClick,
    className: clsx(
      'inline-flex items-center gap-x-1 focus:ring-4 font-medium text-center rounded-lg focus:outline-none hover:no-underline disabled:opacity-50',
      {
        'text-white bg-blue-700 hover:bg-blue-800 hover:text-white focus:ring-blue-300':
          theme === 'default',
        'text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:ring-gray-200':
          theme === 'alternative',
        'text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300 hover:text-white':
          theme === 'dark',
        'text-gray-900 hover:text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-gray-200':
          theme === 'light',
        'text-white hover:text-white bg-green-700 hover:bg-green-800 focus:ring-green-300':
          theme === 'green',
        'text-white hover:text-white bg-red-700 hover:bg-red-800 focus:ring-red-300':
          theme === 'red',
        'text-white hover:text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300':
          theme === 'yellow',
        'text-white hover:text-white bg-purple-700 hover:bg-purple-800 focus:ring-purple-300':
          theme === 'purple',
      },
      {
        'px-3 py-2 text-xs': size === 'xs',
        'px-3 py-2 text-sm': size === 'sm',
        'px-5 py-2.5 text-sm': size === 'md',
        'px-5 py-3 text-base': size === 'lg',
        'px-6 py-3.5 text-base': size === 'xl',
      }
    ),
    ...rest,
  };

  const linkProps = {
    href,
  };

  return (
    <RootElement {...(href ? linkProps : {})} {...commonProps}>
      {children}
    </RootElement>
  );
};

export default Button;
