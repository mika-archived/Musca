import * as React from "react";
import * as Helmet from "react-helmet";
import { Container } from "rebass";

export interface IIndexProps {}
interface IIndexState {}

export class Index extends React.Component<IIndexProps, IIndexState> {
  public render(): JSX.Element {
    return (
      <Container>
        <Helmet title="トップ" />
        <h2>Musca へようこそ！</h2>
        <p>
          左上ハンバーガーメニューをタップし、 [購読サイトを追加] からサイトを追加できます。追加したら、再度ハンバーガーメニューを開くことで、 RSS を購読することができます。
        </p>
      </Container>
    );
  }
}
