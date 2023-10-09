import { render } from '@redwoodjs/testing/web';

import { standard } from '../EventSpeakersCell/EventSpeakersCell.mock';

import EventSpeakers from './EventSpeakers';

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('EventSpeakers', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <EventSpeakers
          eventSpeakers={standard().eventSpeakers}
          eventId={standard().eventId}
        />
      );
    }).not.toThrow();
  });
});
