import { render } from '@redwoodjs/testing/web';

import EventSpeakersPage from './EventSpeakersPage';

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('EventSpeakersPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EventSpeakersPage />);
    }).not.toThrow();
  });
});
