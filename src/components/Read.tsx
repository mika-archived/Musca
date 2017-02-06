import * as React from "react";
import * as Helmet from "react-helmet";
import { Container, Progress } from "rebass";

import { syncFunc } from "../actions/SystemAction";
import { IRss } from "../models/IRss";
import { IResult } from "../models/yql/IResult";
import { Entry } from "./Entry";

export interface IReadProps {
  contents: IResult; // tslint:disable-line:no-any
  website: IRss;
  syncing: boolean;
  sync: syncFunc;
}

interface IReadState {}

export class Read extends React.Component<IReadProps, IReadState> {

  public componentDidMount(): void {
    this.props.sync(this.props.website);
  }

  public render(): JSX.Element {
    const contents = this.props.contents;
    return (
      <Container>
        <Helmet title={this.props.website.name} />
        <h2>{this.props.website.name}</h2>
        {(this.props.syncing || this.props.contents === undefined) ? (
          <div>
            <Progress value={0.5} />
            <p>同期中...</p>
          </div>
        ) : (
          contents.entry !== undefined ?
            (
              contents.entry.map((w, index) => {
                return (<Entry key={index} id={`${this.props.website}/${index}`} title={w.title.toString()} />);
              })
            ) : (
              contents.item.map((w, index) => {
                return (<Entry key={index} id={`${this.props.website}/${index}`} title={w.title} />);
              })
            )
        )
        }
      </Container>
    );
  }
}
