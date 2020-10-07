import React from "react";
import { render } from "@testing-library/react";

import VideoDescription from "../VideoDescription";

describe("Video description component", () => {
  it("Renders without crashing", async () => {
    const { getByText, getAllByRole } = render(
      <VideoDescription
        id="someid"
        title="sometitle"
        description="somedesc"
        thumbnails={{ default: {}, high: {}, medium: {} }}
      />
    );
    const title = getByText(/sometitle/i);
    const desc = getByText(/somedesc/i);
    expect(title).toBeInTheDocument();
    expect(desc).toBeInTheDocument();
    expect(getAllByRole("heading")).toHaveLength(1);
  });
});
