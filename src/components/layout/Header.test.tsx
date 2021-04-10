import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";

test("renders navbar", () => {
  render(<Header>Foo</Header>);
  const linkElement = screen.getByText(/Foo/i);
  expect(linkElement).toBeInTheDocument();
});
