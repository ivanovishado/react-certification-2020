import React from "react";
import { render } from "@testing-library/react";

import App from "./App";

test("renders title", () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/Welcome to the challenge!/i);
  expect(textElement).toBeInTheDocument();
});
