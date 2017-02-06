import * as React from "react";
import * as Helmet from "react-helmet";
import { Button, Container, Textarea } from "rebass";
import { Field } from "redux-form";

import { _importFunc } from "../actions/UserAction";
import { Section } from "../components/Section";
import { IFormProps } from "../internal/ReduxFormWrapper";
import { exportLocalStorage, importLocalStorage } from "../models/IxportString";
import { FieldTextarea } from "./FieldTextarea";

declare function unescape(str: string): string; // tslint:disable-line

export interface IIxportProps extends IFormProps<IIxportFormProps, IIxportProps, IIxportLocalStorage> {
    _import: _importFunc;
}

export interface IIxportFormProps {
  importStr: string;
}

interface IIxportLocalStorage {}

export class Ixport extends React.Component<IIxportProps, IIxportLocalStorage> {
  public componentWillMount(): void {
    this.props.untouch("importStr");
  }

  public render(): JSX.Element {
    return (
      <Container>
        <Helmet title="I/Xport" />
        <h1>Import / Export</h1>
        <Section heading="データのエクスポート">
          <Textarea name="export" label="引き継ぎ用文字列" {...{defaultValue: exportLocalStorage(), readOnly: true}} />
          <p>
            上記引き継ぎ用文字列をコピーし、別のブラウザーでインポートすることで、データを引き継ぐことができます。
          </p>
        </Section>
        <Section heading="データのインポート">
          <p>
            テキストボックスに、引き継ぎ用文字列を入力することで、別のブラウザーでのデータを引き継ぐことができます。
          </p>
          <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
            <Field component={FieldTextarea} name="importStr" label="引き継ぎ用文字列" />
            <Button backgroundColor="primary"
              color="white"
              inverted
              rounded
              style={this.props.invalid ? {backgroundColor: "#ccc"} : {}}
              {...{disabled: this.props.invalid}}>
              インポート
            </Button>
          </form>
        </Section>
      </Container>
    );
  }

  private onSubmit(value: IIxportFormProps): void {
    // localStorage.setItem("redux", LzString.decompressFromEncodedURIComponent(value.importStr));
    // location.reload();
    this.props._import(importLocalStorage(value.importStr));
  }
}
