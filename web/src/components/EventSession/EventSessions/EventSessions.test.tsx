import { render } from '@redwoodjs/testing/web';

import { standard } from '../EventSessionsCell/EventSessionsCell.mock';

import EventSessions from './EventSessions';

describe('EventSessions', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <EventSessions
          eventSessions={standard().eventSessions}
          eventId={standard().eventId}
        />
      );
    }).not.toThrow();
  });
});
