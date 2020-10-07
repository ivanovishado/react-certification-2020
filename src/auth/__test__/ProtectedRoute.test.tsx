import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import ProtectedRoute from "../ProtectedRoute";

test("renders without crashing", () => {
  Object.defineProperty(window, "localStorage", {
    value: {
      getItem: jest.fn(() => true),
    },
  });

  render(
    <BrowserRouter>
      <ProtectedRoute />
    </BrowserRouter>
  );

  expect(window.localStorage.getItem).toHaveBeenCalledTimes(1);
});
