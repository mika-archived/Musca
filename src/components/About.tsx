import * as React from "react";
import * as Helmet from "react-helmet";
import { Link } from "react-router";
import { Container } from "rebass";

import { Section } from "../components/Section";
import { ISoftware } from "../models/ISoftware";

export interface IAboutProps {}
interface IAboutState {}

export class About extends React.Component<IAboutProps, IAboutState> {
  public render(): JSX.Element {
    const softwares: ISoftware[] = [
      { name: "history", repo: "mjackson/history" },
      { name: "lz-string", repo: "pieroxy/lz-string" },
      { name: "React", repo: "facebook/react" },
      { name: "react-geomicons", repo: "jxnblk/react-geomicons" },
      { name: "React Helmet", repo: "nfl/react-helmet" },
      { name: "react-progress-button", repo: "mathieudutour/react-progress-button" },
      { name: "React Redux", repo: "reactjs/react-redux" },
      { name: "React Router", repo: "reacttraining/react-router" },
      { name: "react-router-redux", repo: "reactjs/react-router-redux" },
      { name: "Rebass", repo: "jxnblk/rebass" },
      { name: "Redux", repo: "reactjs/redux" },
      { name: "redux-form", repo: "erikras/redux-form" },
      { name: "redux-localstorage", repo: "elgerlambert/redux-localstorage" },
      { name: "Logger for Redux", repo: "evgenyrodionov/redux-logger" },
      { name: "Redux Thunk", repo: "gaearon/redux-thunk" },
      { name: "uuid", repo: "kelektiv/node-uuid" },
      { name: "whatwg-fetch", repo: "github/fetch" }
    ];
    return (
      <div>
        <Helmet title="About" />
        <Container>
          <h1>Musca - RSS reader</h1>
          <p>
            Musca ("ムスカ") は、サーバーサイドプログラムなしで動作する RSS Reader です。
            必要なファイルをダウンロードし、レンタルサーバーなどで配置するだけで使用できます。
            なお、複数ブラウザー間でデータを共有したい場合は、<Link to="/ixport#">こちら</Link>からできます。
          </p>

          <Section heading="オープンソースライセンス">
            <p>
              このアプリケーションは、以下の OSS を使用しています。
            </p>
            <ul>
              {softwares.map((w) => {
                return (
                  <li key={w.repo}>
                    <a href={`https://github.com/${w.repo}`} target="_blank">{w.name}</a>
                  </li>
                );
              })}
            </ul>
            <p>
              また、このソフトウェアは MIT ライセンスの元でライセンスされています。
            </p>
            <p>
              <a href="https://github.com/fuyuno/Musca" target="_blank">Musca GitHub</a>
            </p>
          </Section>
        </Container>
      </div>
    );
  }
}
