import * as History from "history";
import { routerMiddleware } from "react-router-redux";
import { applyMiddleware, compose, createStore } from "redux";
import * as Redux from "redux";
import * as persistState from "redux-localstorage";
import thunkMiddleware from "redux-thunk";

import * as reducers from "../reducers";
import { IRootState } from "../states/IRootState";

const persistStateMiddleware = persistState();

// tslint:disable:no-any
export function configureStore(history: History.History, initialState: IRootState): Redux.Store<{}> {
  return createStore(reducers.rootReducer, initialState, compose(
    applyMiddleware(
      thunkMiddleware,
      routerMiddleware(history as any),
    ),
    persistStateMiddleware
  ));
}
