import { render } from '@redwoodjs/testing/web';

import EventPage from './EventPage';

describe('EventPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EventPage eventId="97d64e90-2c53-41cf-a6a5-af399f75ecc5" />);
    }).not.toThrow();
  });
});
