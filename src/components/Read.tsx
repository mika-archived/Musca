import * as React from "react";
import * as Helmet from "react-helmet";
import { Container } from "rebass";

import { IRss } from "../models/IRss";

export interface IReadProps {
  website: IRss;
}

interface IReadState {}

export class Read extends React.Component<IReadProps, IReadState> {
  public render(): JSX.Element {
    return (
      <Container>
        <Helmet title={this.props.website.name} />
        <h2>{this.props.website.name}</h2>
      </Container>
    );
  }
}
