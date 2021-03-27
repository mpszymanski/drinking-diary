import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import routes from "./routes";
import Navbar from "./components/layout/Navbar";

function App(): JSX.Element {
  return (
    <Router>
      <Navbar routes={routes} />
      <div>
        <Switch>
          {routes.map((route) => (
            <Route key={route.name} path={route.path} exact={route.exact}>
              <route.page />
            </Route>
          ))}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
