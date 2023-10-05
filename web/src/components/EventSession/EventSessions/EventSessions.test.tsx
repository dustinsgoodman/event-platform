import { render } from "@redwoodjs/testing/web";

import EventSessions from "./EventSessions";
import { standard } from "../EventSessionsCell/EventSessionsCell.mock";


describe("EventSessions", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<EventSessions eventSessions={standard().eventSessions} />);
    }).not.toThrow();
  });
});
