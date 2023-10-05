import { render } from "@redwoodjs/testing/web";
import { routes } from "@redwoodjs/router";

import Pagination from "./Pagination";

describe("Pagination", () => {
  it("renders successfully", () => {
    expect(() => {
      render(
        <Pagination
          route={routes.events}
          totalPages={4}
          currentPage={1}
        />
      );
    }).not.toThrow();
  });
});
