import { render } from "@redwoodjs/testing/web";

import EventSessionsPage from "./EventSessionsPage";

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe("EventSessionsPage", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<EventSessionsPage eventId="42" />);
    }).not.toThrow();
  });
});
