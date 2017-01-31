import * as React from "react";
import { Button, Container, Panel, PanelHeader } from "rebass";
import { Field } from "redux-form";
import { registerFunc } from "../actions/UserAction";
import { IFormProps } from "../internal/ReduxFormWrapper";
import { FieldInput } from "./FieldInput";

export interface INewProps extends IFormProps<INewFormProps, INewProps, INewState> {
  register: registerFunc;
}

export interface INewFormProps {
  name: string;
  url: string;
}

interface INewState {}

export class New extends React.Component<INewProps, INewState> {
  public componentWillMount(): void {
    this.props.untouch("name", "url");
  }

  public render(): JSX.Element {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
        <Container style={{paddingTop: "16px", paddingBottom: "16px"}}>
          <Panel theme={"primary"}>
            <PanelHeader inverted>
              RSS を登録
            </PanelHeader>
            <Field component={FieldInput}
              name="name"
              label="名前"
              placeholder="ITmedia 総合記事一覧" />
            <Field component={FieldInput}
              name="url"
              label="URL"
              placeholder="http://rss.rssad.jp/rss/itmtop/2.0/itmedia_all.xml"  />

            <Button backgroundColor="primary"
              color="white"
              inverted
              rounded
              style={this.props.invalid ? {backgroundColor: "#ccc"} : {}}
              {...{disabled: this.props.invalid}}>
              登録
            </Button>
          </Panel>
        </Container>
      </form>
    );
  }

  private onSubmit(value: INewFormProps): void {
    this.props.register(value.name, value.url);
  }
}
