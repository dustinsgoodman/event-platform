import { render } from "@redwoodjs/testing/web";

import NewEventSessionPage from "./NewEventSessionPage";

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe("NewEventSessionPage", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<NewEventSessionPage />);
    }).not.toThrow();
  });
});
