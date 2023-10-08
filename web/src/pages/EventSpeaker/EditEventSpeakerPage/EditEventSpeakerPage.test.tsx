import { render } from '@redwoodjs/testing/web';

import EditEventSpeakerPage from './EditEventSpeakerPage';

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('EditEventSpeakerPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EditEventSpeakerPage />);
    }).not.toThrow();
  });
});
