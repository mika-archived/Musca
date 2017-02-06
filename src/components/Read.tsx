import * as React from "react";
import * as Helmet from "react-helmet";
import { Container } from "rebass";

import { syncFunc } from "../actions/SystemAction";
import { IRss } from "../models/IRss";

export interface IReadProps {
  website: IRss;
  sync: syncFunc;
}

interface IReadState {}

export class Read extends React.Component<IReadProps, IReadState> {

  public componentDidMount(): void {
    this.props.sync(this.props.website);
  }

  public render(): JSX.Element {
    return (
      <Container>
        <Helmet title={this.props.website.name} />
        <h2>{this.props.website.name}</h2>
      </Container>
    );
  }
}
