import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavbarItem from "./NavbarItem";

test("renders navbar", () => {
  const mockRoute = {
    name: "Foo",
    path: "/bar",
    page: jest.fn(),
  };
  render(
    <MemoryRouter>
      <NavbarItem route={mockRoute} />
    </MemoryRouter>
  );
  const linkElement = screen.getByText(/Foo/i);
  expect(linkElement).toBeInTheDocument();
});
