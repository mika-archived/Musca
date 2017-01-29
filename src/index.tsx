import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { browserHistory, Router } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";

import { Routings } from "./routes";
import { configureStore } from "./store/configureStore";

declare var window;

let state = window.__initialState__ || {};
const store = configureStore(browserHistory as any, state); // tslint:disable-line:no-any
const history = syncHistoryWithStore(browserHistory, store);

const router = (
  <Provider store={store}>
    <Router history={history} routes={Routings} />
  </Provider>
);
ReactDOM.render(router, document.getElementById("root"));
