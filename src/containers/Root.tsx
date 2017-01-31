import * as React from "react";
import * as Redux from "react-redux";
import { Provider } from "react-redux";
import { Router } from "react-router";
import * as ReactRouterRedux from "react-router-redux";

import { routings } from "../routes";

interface IRootProps {
  store: Redux.Store<{}>;
  history: ReactRouterRedux.ReactRouterReduxHistory;
}

interface IRootState {}

export class Root extends React.Component<IRootProps, IRootState> {
  public render(): JSX.Element {
    return (
      <Provider store={this.props.store}>
        <Router history={this.props.history} routes={routings} />
      </Provider>
    );
  }
}
