import * as React from "react";
import { Button, Container, Input, Panel, PanelHeader } from "rebass";
import { registerFunc } from "../actions/UserAction";


export interface INewProps {
  register: registerFunc;
}

interface INewState {}

export class New extends React.Component<INewProps, INewState> {
  public render(): JSX.Element {
    return (
      <Container style={{paddingTop: "16px", paddingBottom: "16px"}}>
        <Panel theme={"primary"}>
          <PanelHeader inverted>
            RSS を登録
          </PanelHeader>
          <Input  label="名前"
            name="name"
            placeholder="ITmedia 総合記事一覧"
            type="text"
            rounded />
          <Input label="URL"
            name="url"
            placeholder="http://rss.rssad.jp/rss/itmtop/2.0/itmedia_all.xml" 
            type="text"
            rounded />

          <Button backgroundColor="primary"
            color="white"
            inverted
            rounded>
            登録
          </Button>
        </Panel>
      </Container>
    );
  }
}
