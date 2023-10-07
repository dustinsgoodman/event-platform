import { ParamsProvider } from '@redwoodjs/router';
import { render } from '@redwoodjs/testing/web';

import EventAdminLayout from './EventAdminLayout';

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('EventAdminLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <ParamsProvider
          allParams={{
            eventId: '123',
          }}
        >
          <EventAdminLayout />
        </ParamsProvider>
      );
    }).not.toThrow();
  });
});
