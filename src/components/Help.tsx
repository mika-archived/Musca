import * as React from "react";
import { Container } from "rebass";
import { Section } from "../components/Section";

export interface IHelpProps {}
interface IHelpState {}

export class Help extends React.Component<IHelpProps, IHelpState> {
  public render(): JSX.Element {
    return (
      <div>
        <Container>
          <h1>ヘルプ</h1>
          <p>

          </p>

          <Section heading="データの引き継ぎ" {...{id: "takeover"}}>
            上の文字列をコピーし、他のブラウザーにて、下の入力ボックスにペーストすることで、データを引き継ぐことができます。
          </Section>
        </Container>
      </div>
    );
  }
}
