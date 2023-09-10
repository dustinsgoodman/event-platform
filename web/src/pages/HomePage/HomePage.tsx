import {
  EmailField,
  FieldError,
  Form,
  Submit,
  SubmitHandler,
} from '@redwoodjs/forms';
import { Link, routes } from '@redwoodjs/router';
import { MetaTags } from '@redwoodjs/web';

import SiteFooter from 'src/components/SiteFooter/SiteFooter';
import SiteHeader from 'src/components/SiteHeader/SiteHeader';

import placeholder from './placeholder.png';

interface EmailSubscribeFormValues {
  email: string;
}

const onEmailSubscribe: SubmitHandler<EmailSubscribeFormValues> = (data) => {
  alert(`Subscribed ${data.email} to newsletter`);
};

const HomePage = () => {
  return (
    <>
      <MetaTags
        title="Welcome"
        description="Homepage for a demo app for an event platform"
      />

      <SiteHeader showLogin={true} />

      <section className="body-font text-gray-900">
        <div className="mx-auto max-w-5xl pb-24 pt-52">
          <h1 className="mb-6 text-center text-7xl font-bold">
            Event Platform Showcase
          </h1>
          <h2 className="font-4 pb-11 text-center text-2xl font-semibold text-gray-700">
            A free to use demo app for creating event platforms
            <br />
            built with Redwood.js
          </h2>
          <div className="ml-6 text-center">
            <Link
              className="text-md focus:shadow-outline inline-flex transform items-center bg-transparent bg-white px-7 py-3 font-semibold text-black transition duration-500 ease-in-out hover:bg-white hover:text-black md:mt-0"
              to={routes.home()}
            >
              <div className="flex text-lg">
                <span className="justify-center">Learn More</span>
              </div>
            </Link>
            <Link
              className="text-md focus:shadow-outline ml-11 inline-flex transform items-center rounded-lg bg-transparent bg-gradient-to-r from-blue-500 to-blue-800 px-14 py-3 font-semibold tracking-tighter text-white transition duration-500 ease-in-out md:mt-0"
              to={routes.home()}
            >
              <div className="flex text-lg">
                <span className="justify-center">Request Demo</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="container mx-auto flex flex-col items-center justify-center">
          <img
            className="g327 mb-10 w-3/4 border object-cover object-center shadow-md"
            alt="Placeholder"
            src={placeholder}
          />
        </div>

        <h2 className="mb-1 pt-40 text-center text-2xl font-semibold tracking-tighter md:text-6xl lg:text-7xl">
          Some tagline here.
        </h2>
        <br></br>
        <p className="mx-auto text-center text-xl font-normal leading-relaxed text-gray-700 lg:w-2/3">
          Here&apos;s why this event platform is pretty cool and you should
          consider using it.
        </p>
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 px-3 pb-24 pt-12 md:px-1">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="rounded-lg bg-gray-100 p-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="1em"
                height="1em"
                fill="currentColor"
              >
                <path d="M19 4H5V20H19V4ZM3 2.9918C3 2.44405 3.44749 2 3.9985 2H19.9997C20.5519 2 20.9996 2.44772 20.9997 3L21 20.9925C21 21.5489 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918ZM11.2929 13.1213L15.5355 8.87868L16.9497 10.2929L11.2929 15.9497L7.40381 12.0607L8.81802 10.6464L11.2929 13.1213Z"></path>
              </svg>
              <h3 className="pt-3 text-lg font-semibold">
                Lorem ipsum dolor sit amet
              </h3>
              <p className="value-text text-md pt-2 text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas tincidunt a libero in finibus. Maecenas a nisl vitae
                ante rutrum porttitor.
              </p>
            </div>
          ))}
        </div>

        <section className="relative pb-24">
          <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
            <div className="py-24 md:py-36">
              <h1 className="mb-5 text-6xl font-bold">
                Subscribe to our newsletter
              </h1>
              <h1 className="mb-9 text-2xl font-semibold text-gray-700">
                Enter your email address and get our newsletters straight away.
              </h1>
              <Form onSubmit={onEmailSubscribe} className="flex justify-center">
                <div className="flex basis-72 flex-col items-start">
                  <label htmlFor="email" className="hidden">
                    Email
                  </label>
                  <EmailField
                    placeholder="dustin@eventplatform.com"
                    name="email"
                    autoComplete="email"
                    className="mt-2 h-12 w-full rounded-md border border-gray-600 py-3 pl-2 pr-2 font-semibold text-gray-800 hover:border-gray-700"
                    validation={{ required: true }}
                    errorClassName="w-full h-12 border rounded-md border-red-500 pr-2 pl-2 py-3 mt-2 font-semibold"
                  />
                  <FieldError
                    name="email"
                    className="border-red-500 text-red-500"
                  />
                </div>

                <Submit className="ml-2 mt-2 inline-flex h-12 transform items-center rounded-lg border border-gray-700 bg-transparent bg-white px-14 py-3 font-medium text-black transition duration-500 ease-in-out">
                  <span className="justify-center">Subscribe</span>
                </Submit>
              </Form>
            </div>
          </div>
        </section>
      </section>

      <SiteFooter />
    </>
  );
};

export default HomePage;
