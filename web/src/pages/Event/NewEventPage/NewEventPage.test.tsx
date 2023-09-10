import { render } from '@redwoodjs/testing/web';

import NewEventPage from './NewEventPage';

describe('NewEventPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewEventPage />);
    }).not.toThrow();
  });
});
