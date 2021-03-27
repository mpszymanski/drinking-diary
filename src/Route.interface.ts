import { FunctionComponent } from "react";

export default interface Route {
  path: string;
  name: string;
  exact?: boolean;
  page: FunctionComponent;
}
