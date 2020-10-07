import React from "react";
import { render } from "@testing-library/react";

import Favorites from "../Favorites";

describe("Favorites page", () => {
  it("Renders without crashing", async () => {
    const { getByText } = render(<Favorites />);
    const textElement = getByText(/show/i);
    expect(textElement).toBeInTheDocument();
  });
});
