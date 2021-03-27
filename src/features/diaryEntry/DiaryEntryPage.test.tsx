import React from "react";
import { render, screen } from "@testing-library/react";
import DiaryEntryPage from "./DiaryEntryPage";

test("renders home page", () => {
  render(<DiaryEntryPage />);
  const linkElement = screen.getByText(/App home/i);
  expect(linkElement).toBeInTheDocument();
});
