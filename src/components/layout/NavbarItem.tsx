import React from "react";
import { Link, useLocation } from "react-router-dom";

import RouteInterface from "../../Route.interface";
import DefaultPropsInterface from "../DefaultProps.interface";

export default function NavbarItem(props: NavbarItemProps): JSX.Element {
  const { route } = props;

  const location = useLocation();
  const isActive = location.pathname === route.path;
  const activeNavbarClass = isActive ? "bg-gray-50 font-medium" : "";

  return (
    <li
      key={route.name}
      className={`flex flex-1 text-center ${activeNavbarClass}`}
    >
      <Link to={route.path} className="py-4 px-3 flex-1">
        {route.name}
      </Link>
    </li>
  );
}

interface NavbarItemProps extends DefaultPropsInterface {
  route: RouteInterface;
}
