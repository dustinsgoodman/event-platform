import { render } from "@redwoodjs/testing/web";

import NewEvent from "./NewEvent";

describe("NewEvent", () => {
  it("renders successfully", () => {
    expect(() => {
      render(
        <NewEvent />
      );
    }).not.toThrow();
  });
});
