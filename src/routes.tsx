import React from "react";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import About from "./pages/About";
import Route from "./interfaces/Route";

const routes: Route[] = [
  {
    path: "/",
    name: "Home",
    exact: true,
    page: () => <Home />,
  },
  {
    path: "/settings",
    name: "Settings",
    page: () => <Settings />,
  },
  {
    path: "/about",
    name: "About",
    page: () => <About />,
  },
];

export default routes;
