import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import routes from "./routes"
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar routes={routes} />
      <div>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.page />}
            />
          ))}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
