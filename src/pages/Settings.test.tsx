import React from "react";
import { render, screen } from "@testing-library/react";
import Settings from "./Settings";

test("renders settings page", () => {
  render(<Settings />);
  const linkElement = screen.getByText(/App settings/i);
  expect(linkElement).toBeInTheDocument();
});
