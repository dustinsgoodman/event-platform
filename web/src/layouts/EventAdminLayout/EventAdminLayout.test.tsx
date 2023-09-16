import { render } from '@redwoodjs/testing/web';

import EventAdminLayout from './EventAdminLayout';

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('EventAdminLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EventAdminLayout />);
    }).not.toThrow();
  });
});
