import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { browserHistory } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";

import { Root } from "./containers/Root";
import { initialState, IRootState } from "./states/IRootState";
import { configureStore } from "./store/configureStore";

declare var module;
declare var window;
declare function require(module: string): any; // tslint:disable-line

let state: IRootState = window.__initialState__ || initialState;
const store = configureStore(browserHistory as any, state); // tslint:disable-line:no-any
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept("./containers/Root", () => {
    const NewRoot = require("./containers/Root").Root; // tslint:disable-line
    ReactDOM.render(<NewRoot store={store} history={history} />, document.getElementById("root"));
  });
}
