import { render } from "@redwoodjs/testing/web";

import EventSession from "./EventSession";
import { standard } from "../EventSessionCell/EventSessionCell.mock";

describe("EventSession", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<EventSession eventSession={standard().eventSession}/>);
    }).not.toThrow();
  });
});
