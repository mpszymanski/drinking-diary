import React from "react";
import { render, screen } from "@testing-library/react";
import DiaryCalendarPage from "./DiaryCalendarPage";

test("renders home page", () => {
  render(<DiaryCalendarPage />);
  const linkElement = screen.getByText(/App calendar/i);
  expect(linkElement).toBeInTheDocument();
});
