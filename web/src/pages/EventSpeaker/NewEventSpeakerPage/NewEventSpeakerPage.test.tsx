import { render } from '@redwoodjs/testing/web';

import NewEventSpeakerPage from './NewEventSpeakerPage';

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('NewEventSpeakerPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewEventSpeakerPage />);
    }).not.toThrow();
  });
});
