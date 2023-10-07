import { render } from '@redwoodjs/testing/web';

import { standard } from '../EventSessionCell/EventSessionCell.mock';

import EventSession from './EventSession';

describe('EventSession', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <EventSession
          eventSession={standard().eventSession}
          eventId={standard().eventSession.eventId}
        />
      );
    }).not.toThrow();
  });
});
