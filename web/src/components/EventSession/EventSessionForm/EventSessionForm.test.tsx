import { render } from '@redwoodjs/testing/web';

import EventSessionForm from './EventSessionForm';

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('EventSessionForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EventSessionForm />);
    }).not.toThrow();
  });
});
