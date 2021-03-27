import React from "react";
import { render, screen } from "@testing-library/react";
import SettingsPage from "./SettingsPage";

test("renders settings page", () => {
  render(<SettingsPage />);
  const linkElement = screen.getByText(/App settings/i);
  expect(linkElement).toBeInTheDocument();
});
