import React from "react";
import { render, screen } from "@testing-library/react";
import AboutPage from "./AboutPage";

test("renders settings page", () => {
  render(<AboutPage />);
  const linkElement = screen.getByText(/App about/i);
  expect(linkElement).toBeInTheDocument();
});
