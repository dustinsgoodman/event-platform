import { render } from '@redwoodjs/testing/web';

import EditEventSessionPage from './EditEventSessionPage';

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('EditEventSessionPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EditEventSessionPage />);
    }).not.toThrow();
  });
});
