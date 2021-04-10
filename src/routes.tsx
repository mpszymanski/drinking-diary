import React from "react";
import DiaryEntryPage from "./features/diaryEntry/DiaryEntryPage";
import SettingsPage from "./features/settings/SettingsPage";
import AboutPage from "./features/about/AboutPage";
import Route from "./Route.interface";
import DiaryCalendarPage from "./features/calendar/DiaryCalendarPage";

const routes: Route[] = [
  {
    path: "/",
    name: "Today",
    exact: true,
    page: () => <DiaryEntryPage />,
  },
  {
    path: "/calendar",
    name: "Calendar",
    page: () => <DiaryCalendarPage />,
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
