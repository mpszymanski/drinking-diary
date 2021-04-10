import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../app/store";
import SettingsPage from "./SettingsPage";

test("renders settings page", () => {
  render(
    <Provider store={store}>
      <SettingsPage />
    </Provider>
  );

  const linkElement = screen.getByText(/App settings/i);
  expect(linkElement).toBeInTheDocument();
});
