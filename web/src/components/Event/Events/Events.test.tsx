import { render } from "@redwoodjs/testing/web";

import Events from "./Events";
import { standard } from "./Events.mock";

describe("Events", () => {
  it("renders successfully", () => {
    expect(() => {
      render(
        <Events
          events={standard().events}
        />
      );
    }).not.toThrow();
  });
});
