import * as React from "react";
import * as Helmet from "react-helmet";
import { Container } from "rebass";

export interface IErrorProps {}
interface IErrorState {}

export class Error extends React.Component<IErrorProps, IErrorState> {
  public render(): JSX.Element {
    return (
      <Container style={{paddingTop: "16px", paddingBototm: "16px"}}>
        <Helmet title="404 Not Found" />
        <h2>404 Not Found</h2>
        <p>
          お探しのページは見つかりませんでした。
        </p>
      </Container>
    );
  }
}
