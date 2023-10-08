import { render } from '@redwoodjs/testing/web';

import EventSpeakers from './EventSpeakers';

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('EventSpeakers', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EventSpeakers />);
    }).not.toThrow();
  });
});
