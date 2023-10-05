import { render } from '@redwoodjs/testing/web';

import NewEventSession from './NewEventSession';

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('NewEventSession', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewEventSession />);
    }).not.toThrow();
  });
});
