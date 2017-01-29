import * as React from "react";
import { Container } from "rebass";
import { Header } from "../components/Header";
import { Section } from "../components/Section";

export class About extends React.Component<void, void> {
  public render(): JSX.Element {
    return (
      <div>
        <Header />
        <Container>
          <h1>Musca - RSS reader</h1>
          <p>
            Musca ("ムスカ") は、サーバーサイドプログラムなしで動作する RSS Reader です。
            必要なファイルをダウンロードし、レンタルサーバーなどで配置するだけで使用できます。
          </p>

          <Section heading="オープンソースライセンス">
            <p>
              このアプリケーションは、以下の OSS を使用しています。
            </p>
            <ul>
              <li>React.js</li>
              <li>React Geomicons</li>
              <li>React Router</li>
              <li>Rebass</li>
            </ul>
          </Section>
        </Container>
      </div>
    );
  }
}