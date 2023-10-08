import { render } from '@redwoodjs/testing/web';

import IndexHeader from './IndexHeader';

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('IndexHeader', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<IndexHeader />);
    }).not.toThrow();
  });
});
