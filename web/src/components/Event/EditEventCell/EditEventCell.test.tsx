import { render, screen } from '@redwoodjs/testing';

import { Loading, Failure, Success } from './EditEventCell';
import { standard } from './EditEventCell.mock';

describe('EditEventCell', () => {
  test('Loading renders successfully', () => {
    expect(() => {
      render(<Loading />);
    }).not.toThrow();
  });
  test('Failure renders successfully', async () => {
    expect(() => {
      render(<Failure error={new Error('Oh no')} />);
    }).not.toThrow();
  });

  test('Success renders successfully', async () => {
    const event = standard().event;
    render(<Success event={event} />);

    expect(screen.getByDisplayValue(event.name)).toBeInTheDocument();
  });
});
