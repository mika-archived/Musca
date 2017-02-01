import * as React from "react";
import { IndexRoute, Route } from "react-router";

import About from "./containers/About";
import App from "./containers/App";
import Index from "./containers/Index";
import New from "./containers/New";
import Read from "./containers/Read";

export const routings: JSX.Element = (
  <Route path="/" component={App}>
    <IndexRoute component={Index} />
    <Route path="about" component={About} />
    <Route path="new" component={New} />
    <Route path="read/:id" component={Read} />
  </Route>
);
