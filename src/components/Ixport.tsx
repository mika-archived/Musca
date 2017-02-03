import * as LzString from "lz-string";
import * as React from "react";
import { Button, Container, Textarea } from "rebass";

import { Section } from "../components/Section";

declare function unescape(str: string): string; // tslint:disable-line

export interface IIxportProps {}
interface IIxportState {
  importStr: string;
}

export class Ixport extends React.Component<IIxportProps, IIxportState> {
  public constructor(props: IIxportProps) {
    super(props);
    this.state = {importStr: ""};
  }

  public render(): JSX.Element {
    const plain = localStorage.getItem("redux");
    const lzstr = LzString.compressToEncodedURIComponent(plain);
    return (
      <div>
        <Container>
          <h1>Import / Export</h1>
          <Section heading="データのエクスポート">
            <Textarea name="export" label="引き継ぎ用文字列" {...{defaultValue: lzstr, readOnly: true}} />
            <p>
              上記引き継ぎ用文字列をコピーし、別のブラウザーでインポートすることで、データを引き継ぐことができます。
            </p>
          </Section>
          <Section heading="データのインポート">
            <p>
              テキストボックスに、引き継ぎ用文字列を入力することで、別のブラウザーでのデータを引き継ぐことができます。
            </p>
            <Textarea name="import" label="引き継ぎ用文字列"
              {...{value: this.state.importStr, onChange: this.onChange.bind(this)}}
            />
            <Button {...{onClick: this.onClickImport.bind(this)}}>インポート</Button>
          </Section>
        </Container>
      </div>
    );
  }

  private onChange(event: React.FormEvent<HTMLTextAreaElement>): void {
    this.setState({importStr: (event.target as any).value}); // tslint:disable-line:no-any
  }

  private onClickImport(): void {
    localStorage.setItem("redux", LzString.decompressFromEncodedURIComponent(this.state.importStr));
    location.reload();
  }
}
