import { render } from '@redwoodjs/testing/web';

import EventRegistrantsPage from './EventRegistrantsPage';

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('EventRegistrantsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EventRegistrantsPage />);
    }).not.toThrow();
  });
});
