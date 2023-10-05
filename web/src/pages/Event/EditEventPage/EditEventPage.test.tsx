import { render } from '@redwoodjs/testing/web';

import EditEventPage from './EditEventPage';

describe('EditEventPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EditEventPage id="97d64e90-2c53-41cf-a6a5-af399f75ecc5" />);
    }).not.toThrow();
  });
});
