import { Link, routes } from '@redwoodjs/router';
import { Toaster } from '@redwoodjs/web/toast';

type LayoutProps = {
  title: string;
  titleTo: string;
  buttonLabel: string;
  buttonTo: string;
  children: React.ReactNode;
};

const ScaffoldLayout = ({
  title,
  titleTo,
  buttonLabel,
  buttonTo,
  children,
}: LayoutProps) => {
  return (
    <div className="bg-white text-gray-600">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="flex justify-between px-8 py-4">
        <h1 className="text-xl font-semibold">
          <Link to={routes[titleTo]()} className="text-gray-600 no-underline">
            {title}
          </Link>
        </h1>
        <Link
          to={routes[buttonTo]()}
          className="flex cursor-pointer justify-center rounded border-0 bg-green-500 px-4 py-1 text-xs font-semibold uppercase leading-loose tracking-wide text-white no-underline transition duration-100 hover:bg-green-700"
        >
          <div className="mr-1 text-xl leading-5">+</div> {buttonLabel}
        </Link>
      </header>
      <main className="mr-1 text-xl leading-5">{children}</main>
    </div>
  );
};

export default ScaffoldLayout;
