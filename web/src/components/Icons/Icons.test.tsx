import { render } from '@redwoodjs/testing/web';

import {
  ChevronDown,
  CheckboxIcon,
  HorizontalMore,
  MenuIcon,
  UserIcon,
  VerticalMore,
} from './Icons';

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Icons', () => {
  it.each([
    ['ChevronDown', ChevronDown],
    ['CheckboxIcon', CheckboxIcon],
    ['HorizontalMore', HorizontalMore],
    ['MenuIcon', MenuIcon],
    ['UserIcon', UserIcon],
    ['VerticalMore', VerticalMore],
  ])('%s renders successfully', (componentName, Component) => {
    expect(() => {
      render(<Component />);
    }).not.toThrow();
  });
});
