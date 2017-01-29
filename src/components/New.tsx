import * as React from "react";
import { Container, Panel, PanelHeader } from "rebass";

export interface INewProps {}
interface INewState {}

export class New extends React.Component<INewProps, INewState> {
  public render(): JSX.Element {
    return (
      <Container style={{paddingTop: "16px", paddingBottom: "16px"}}>
        <Panel theme={"primary"}>
          <PanelHeader inverted>
            Web サイトを登録
          </PanelHeader>
        </Panel>
      </Container>
    );
  }
}
