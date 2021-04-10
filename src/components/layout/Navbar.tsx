import React from "react";

import RouteInterface from "../../Route.interface";
import DefaultPropsInterface from "../DefaultProps.interface";
import NavbarItem from "./NavbarItem";

export default function Navbar(props: NavbarProps): JSX.Element {
  const { routes } = props;
  return (
    <div className="bg-white text-gray-600 border-t border-gray-200 md:border-t-0 md:border-b">
      <div className="container mx-auto flex">
        <div className="hidden py-4 px-3 md:block">Drinking Diary</div>
        <nav className="relative w-full md:w-auto md:ml-auto">
          <ul className="flex">
            {routes.map((route) => NavbarItem({ route }))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

interface NavbarProps extends DefaultPropsInterface {
  routes: RouteInterface[];
}
