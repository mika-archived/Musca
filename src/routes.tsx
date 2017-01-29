import * as React from "react";
import { IndexRoute, Route } from "react-router";

import About from "./containers/About";
import App from "./containers/App";
import New from "./containers/New";
import Root from "./containers/Root";

export const routings: JSX.Element = (
  <Route path="/" component={App}>
    <IndexRoute component={Root} />
    <Route path="about" component={About} />
    <Route path="new" component={New} />
  </Route>
);
