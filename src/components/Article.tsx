import * as React from "react";
import * as Helmet from "react-helmet";
import { Link } from "react-router";
import { Container } from "rebass";

import { IRss } from "../models/IRss";
import { IEntry } from "../models/yql/atom/IEntry";
import { IItem } from "../models/yql/rss/IItem";

export interface IArticleProps {
  content: IEntry | IItem;
  website: IRss;
}

interface IArticleState {}

export class Article extends React.Component<IArticleProps, IArticleState> {
  public componentDidMount(): void {
    window.scroll(0, 0);
  }

  public componentDidUpdate(): void {
    window.scroll(0, 0);
  }

  public render(): JSX.Element {
    let content;
    if ((this.props.content as IEntry).id !== undefined) {
      // IEntry
      const entry = this.props.content as IEntry;
      content = (
        <div>
          <Helmet title={`${entry.title} | ${this.props.website.name}`} />
          <h1>{entry.title}</h1>
          <p style={{margin: "5px 0px", fontSize: "75%"}}>
            <a href={entry.link.href} target="_blank">元記事へのリンク</a>
          </p>
          <div className="__entry-content" dangerouslySetInnerHTML={{__html: entry.content.content}}></div>
        </div>
      );
    } else {
      const item = this.props.content as IItem;
      content = (
        <div>
          <Helmet title={`${item.title} | ${this.props.website.name}`} />
          <h1>{item.title}</h1>
          <div className="__entry-content" dangerouslySetInnerHTML={{__html: item.description}}></div>
        </div>
      );
    }
    return (
      <Container>
        <div>
          <Link to={`/read/${this.props.website.id}`}>＜ 一覧へ戻る</Link>
        </div>
        {content}
      </Container>
    );
  }
}
