import React from "react";
import DiaryEntryPage from "./features/diaryEntry/DiaryEntryPage";
import SettingsPage from "./features/settings/SettingsPage";
import AboutPage from "./features/about/AboutPage";
import Route from "./Route.interface";

const routes: Route[] = [
  {
    path: "/",
    name: "Home",
    exact: true,
    page: () => <DiaryEntryPage />,
  },
  {
    path: "/settings",
    name: "Settings",
    page: () => <SettingsPage />,
  },
  {
    path: "/about",
    name: "About",
    page: () => <AboutPage />,
  },
];

export default routes;
