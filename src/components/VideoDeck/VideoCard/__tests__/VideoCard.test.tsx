import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import VideoCard from "../VideoCard";

describe("VideoCard component", () => {
  it("Renders without crashing", async () => {
    const { getAllByRole } = render(
      <BrowserRouter>
        <VideoCard
          id={{ videoId: "" }}
          snippet={{
            title: "",
            description: "",
            thumbnails: {
              default: { url: "", width: 0, height: 0 },
              high: { url: "", width: 0, height: 0 },
              medium: { url: "", width: 0, height: 0 },
            },
          }}
        />
      </BrowserRouter>
    );
    const headings = getAllByRole("heading");
    expect(headings).toHaveLength(1);
  });
});
