import React from "react";
import DefaultPropsInterface from "../DefaultProps.interface";

export default function Header(props: HeaderProps): JSX.Element {
  const { children } = props;

  return (
    <header className="w-full my-8">
      <h2 className="text-center text-xl">{children}</h2>
    </header>
  );
}

type HeaderProps = DefaultPropsInterface;
