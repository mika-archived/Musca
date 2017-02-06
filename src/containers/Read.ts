import { connect } from "react-redux";

import { sync } from "../actions/SystemAction";
import { IReadProps, Read } from "../components/Read";
import { IOwnProps } from "../internal/ReactRouter";
import { IRss } from "../models/IRss";
import { IRootState } from "../states/IRootState";

function mapStateToProps(state: IRootState, ownProps: IOwnProps): IReadProps {
  return {
    website: state.user.websites.find((w) => w.id === ownProps.params.id)
  } as IReadProps;
}

function mapDispatchToProps(dispatch: Function): IReadProps {
  return {
    sync: (website: IRss) => dispatch(sync(website))
  } as IReadProps;
}

// tslint:disable-next-line:no-default-export
export default connect(mapStateToProps, mapDispatchToProps)(Read);
