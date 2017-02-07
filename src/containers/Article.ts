import { connect } from "react-redux";

import { Article, IArticleProps } from "../components/Article";
import { IOwnProps } from "../internal/ReactRouter";
import { IEntry } from "../models/yql/atom/IEntry";
import { IItem } from "../models/yql/rss/IItem";
import { IRootState } from "../states/IRootState";

function mapStateToProps(state: IRootState, ownProps: IOwnProps): IArticleProps {
  const website = state.user.websites.find((w) => w.id === ownProps.params.id);
  const item: IEntry | IItem = state.system.contents[website.id].entry !== undefined ?
    state.system.contents[website.id].entry[ownProps.params.index] :
    state.system.contents[website.id].item[ownProps.params.index];
  return {
    content: item,
    website
  } as IArticleProps;
}

function mapDispatchToProps(dispatch: Function): IArticleProps {
  return {

  } as IArticleProps;
}

// tslint:disable-next-line:no-default-export
export default connect(mapStateToProps, mapDispatchToProps)(Article);
