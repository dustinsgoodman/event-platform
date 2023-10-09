import { render } from '@redwoodjs/testing/web';

import EventSpeakerPage from './EventSpeakerPage';

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('EventSpeakerPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EventSpeakerPage />);
    }).not.toThrow();
  });
});
