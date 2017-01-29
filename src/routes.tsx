import * as React from "react";
import { IndexRoute, Route } from "react-router";

import About from "./containers/About";
import App from "./containers/App";
import Root from "./containers/Root";

export const Routings: JSX.Element = (
  <Route path="/" component={App}>
    <IndexRoute component={Root} />
    <Route path="about" component={About} />
  </Route>
);
