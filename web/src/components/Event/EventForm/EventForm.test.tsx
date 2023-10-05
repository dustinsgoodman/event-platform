import { render } from "@redwoodjs/testing/web";

import EventForm from "./EventForm";
import { standard } from "./EventForm.mock";

describe("EventForm", () => {
  it("renders successfully", () => {
    expect(() => {
      render(
        <EventForm
          event={standard().event}
          onSave={() => jest.fn()}
          error={null}
          loading={false}
        />
      );
    }).not.toThrow();
  });
});
