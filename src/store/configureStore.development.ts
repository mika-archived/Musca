import * as History from "history";
import { routerMiddleware } from "react-router-redux";
import { applyMiddleware, compose, createStore } from "redux";
import * as Redux from "redux";
import * as persistState from "redux-localstorage";
import * as createLogger from "redux-logger";
import thunkMiddleware from "redux-thunk";

import * as reducers from "../reducers";
import { IRootState } from "../states/IRootState";

declare var module; // for HMR

const loggerMiddleware: Redux.Middleware = createLogger();
const persistStateMiddleware = persistState();

// tslint:disable:no-any
export function configureStore(history: History.History, initialState: IRootState): Redux.Store<{}> {
  let store = createStore(reducers.rootReducer, initialState, compose(
    applyMiddleware(
      thunkMiddleware,
      routerMiddleware(history as any),
      loggerMiddleware
    ),
    persistStateMiddleware
  ));
  if (module.hot) {
    module.hot.accept("../reducers", () => {
      const nextRootreducer = reducers.rootReducer;
      store.replaceReducer(nextRootreducer);
    });
  }
  return store;
}
