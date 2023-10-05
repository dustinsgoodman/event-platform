import { render } from '@redwoodjs/testing/web';

import SiteFooter from './SiteFooter';

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SiteFooter', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SiteFooter />);
    }).not.toThrow();
  });
});
