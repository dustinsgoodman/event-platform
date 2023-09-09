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

      <section className="text-gray-900 body-font">
        <div className="max-w-5xl pt-52 pb-24 mx-auto">
          <h1 className="text-7xl text-center font-bold mb-6">
            Event Platform Showcase
          </h1>
          <h2 className="text-2xl font-4 font-semibold pb-11 text-gray-700 text-center">
            A free to use demo app for creating event platforms
            <br />
            built with Redwood.js
          </h2>
          <div className="ml-6 text-center">
            <Link
              className="inline-flex items-center py-3 font-semibold text-black transition duration-500 ease-in-out transform bg-transparent bg-white px-7 text-md md:mt-0 hover:text-black hover:bg-white focus:shadow-outline"
              to={routes.home()}
            >
              <div className="flex text-lg">
                <span className="justify-center">Learn More</span>
              </div>
            </Link>
            <Link
              className="inline-flex items-center py-3 font-semibold tracking-tighter text-white transition duration-500 ease-in-out rounded-lg transform bg-transparent ml-11 bg-gradient-to-r from-blue-500 to-blue-800 px-14 text-md md:mt-0 focus:shadow-outline"
              to={routes.home()}
            >
              <div className="flex text-lg">
                <span className="justify-center">Request Demo</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="container flex flex-col items-center justify-center mx-auto">
          <img
            className="object-cover object-center w-3/4 mb-10 border shadow-md g327"
            alt="Placeholder"
            src={placeholder}
          />
        </div>

        <h2 className="pt-40 mb-1 text-2xl font-semibold tracking-tighter text-center lg:text-7xl md:text-6xl">
          Some tagline here.
        </h2>
        <br></br>
        <p className="mx-auto text-xl text-center text-gray-700 font-normal leading-relaxed lg:w-2/3">
          Here&apos;s why this event platform is pretty cool and you should
          consider using it.
        </p>
        <div className="pt-12 pb-24 max-w-4xl mx-auto grid grid-cols-2 gap-8 md:px-1 px-3">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-gray-100 p-8 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="1em"
                height="1em"
                fill="currentColor"
              >
                <path d="M19 4H5V20H19V4ZM3 2.9918C3 2.44405 3.44749 2 3.9985 2H19.9997C20.5519 2 20.9996 2.44772 20.9997 3L21 20.9925C21 21.5489 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918ZM11.2929 13.1213L15.5355 8.87868L16.9497 10.2929L11.2929 15.9497L7.40381 12.0607L8.81802 10.6464L11.2929 13.1213Z"></path>
              </svg>
              <h3 className="pt-3 font-semibold text-lg">
                Lorem ipsum dolor sit amet
              </h3>
              <p className="pt-2 value-text text-md text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas tincidunt a libero in finibus. Maecenas a nisl vitae
                ante rutrum porttitor.
              </p>
            </div>
          ))}
        </div>

        <section className="relative pb-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <div className="py-24 md:py-36">
              <h1 className="mb-5 text-6xl font-bold">
                Subscribe to our newsletter
              </h1>
              <h1 className="mb-9 text-2xl font-semibold text-gray-700">
                Enter your email address and get our newsletters straight away.
              </h1>
              <Form onSubmit={onEmailSubscribe} className="flex justify-center">
                <div className="flex flex-col items-start basis-72">
                  <label htmlFor="email" className="hidden">
                    Email
                  </label>
                  <EmailField
                    placeholder="dustin@eventplatform.com"
                    name="email"
                    autoComplete="email"
                    className="w-full h-12 border border-gray-600 pr-2 pl-2 py-3 mt-2 rounded-md text-gray-800 font-semibold hover:border-gray-700"
                    validation={{ required: true }}
                    errorClassName="w-full h-12 border rounded-md border-red-500 pr-2 pl-2 py-3 mt-2 font-semibold"
                  />
                  <FieldError
                    name="email"
                    className="text-red-500 border-red-500"
                  />
                </div>

                <Submit className="h-12 inline-flex items-center px-14 py-3 mt-2 ml-2 font-medium text-black transition duration-500 ease-in-out transform bg-transparent border border-gray-700 rounded-lg bg-white">
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
