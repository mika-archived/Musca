import * as React from "react";
import * as Helmet from "react-helmet";

export interface IIndexProps {}
interface IIndexState {}

export class Index extends React.Component<IIndexProps, IIndexState> {
  public render(): JSX.Element {
    return (
      <div>
        <Helmet title="すべて" />
        たるっ
      </div>
    );
  }
}
