import React from "react";
import { Link } from "react-router-dom";

import Route from "../interfaces/Route";

export default function Navbar(props: NavbarProps): JSX.Element {
  const { routes } = props;
  return (
    <div>
      <div>Drinking Diary</div>
      <nav>
        <ul>
          {routes.map((route) => (
            <li>
              <Link to={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

interface NavbarProps {
  routes: Route[];
}
