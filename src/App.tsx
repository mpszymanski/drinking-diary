import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import routes from "./routes";
import Navbar from "./components/layout/Navbar";

function App(): JSX.Element {
  return (
    <div className="relative w-screen h-screen bg-gray-50 flex flex-col md:flex-col-reverse">
      <Router>
        <div className="flex-1 container mx-auto px-4 mx:px-0">
          <Switch>
            {routes.map((route) => (
              <Route key={route.name} path={route.path} exact={route.exact}>
                <route.page />
              </Route>
            ))}
          </Switch>
        </div>
        <Navbar routes={routes} />
      </Router>
    </div>
  );
}

export default App;
