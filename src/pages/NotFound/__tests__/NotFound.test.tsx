import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import NotFound from "../NotFound";

describe("NotFound page", () => {
  it("Renders without crashing", async () => {
    const { getByText } = render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
    const notFoundText = getByText(/Not Found!/i);
    const returnText = getByText(/Return/i);
    expect(notFoundText).toBeInTheDocument();
    expect(returnText).toBeInTheDocument();
  });
});
