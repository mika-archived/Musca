import createHashHistory from "history/lib/createHashHistory";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Route, Router, useRouterHistory } from "react-router";

import { About, Root } from "./containers"

const root = document.getElementById("root");
const router = (
  <Router history={useRouterHistory(createHashHistory)()}>
    <Route path="/" component={Root} />
    <Route path="/about" component={About} />
  </Router>
);
ReactDOM.render(router, root);
