import React from "react";
import { render } from "@testing-library/react";

import LoginModal from "../LogInModal";

describe("Login modal", () => {
  it("Renders without crashing", async () => {
    const { getByText } = render(
      <LoginModal open={true} handleClose={() => {}} />
    );
    const textElement = getByText(/Enter your credentials/i);
    expect(textElement).toBeInTheDocument();
  });
});
