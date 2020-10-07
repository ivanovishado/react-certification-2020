import React from "react";
import { render } from "@testing-library/react";

import VideoDetail from "../VideoDetail";

describe("VideoDetail component", () => {
  it("Renders without crashing", async () => {
    const { getByText } = render(<VideoDetail />);
    const textElement = getByText(/Loading/i);
    expect(textElement).toBeInTheDocument();
  });
});
