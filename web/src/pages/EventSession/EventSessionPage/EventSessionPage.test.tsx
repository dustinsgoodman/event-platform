import { render } from "@redwoodjs/testing/web";

import EventSessionPage from "./EventSessionPage";

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe("EventSessionPage", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<EventSessionPage />);
    }).not.toThrow();
  });
});
