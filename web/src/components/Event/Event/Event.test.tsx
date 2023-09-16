import { render } from '@redwoodjs/testing/web';

import Event from './Event';
import { standard } from './Event.mock';

describe('Event', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Event event={standard().event} />);
    }).not.toThrow();
  });
});
