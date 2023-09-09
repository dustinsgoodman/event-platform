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
      <header className="flex justify-between py-4 px-8">
        <h1 className="font-semibold text-xl">
          <Link to={routes[titleTo]()} className="text-gray-600 no-underline">
            {title}
          </Link>
        </h1>
        <Link
          to={routes[buttonTo]()}
          className="flex justify-center py-1 px-4 border-0 rounded text-xs font-semibold uppercase tracking-wide leading-loose no-underline cursor-pointer transition duration-100 bg-green-500 text-white hover:bg-green-700"
        >
          <div className="text-xl leading-5 mr-1">+</div> {buttonLabel}
        </Link>
      </header>
      <main className="text-xl leading-5 mr-1">{children}</main>
    </div>
  );
};

export default ScaffoldLayout;
