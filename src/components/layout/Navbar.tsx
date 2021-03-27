import React from "react";
import { Link } from "react-router-dom";

import RouteInterface from "../../Route.interface";

export default function Navbar(props: NavbarProps): JSX.Element {
  const { routes } = props;
  return (
    <div>
      <div>Drinking Diary</div>
      <nav>
        <ul>
          {routes.map((route) => (
            <li key={route.name}>
              <Link to={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

interface NavbarProps {
  routes: RouteInterface[];
}
