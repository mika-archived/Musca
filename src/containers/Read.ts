import { connect } from "react-redux";

import { IReadProps, Read } from "../components/Read";
import { IOwnProps } from "../internal/ReactRouter";
import { IRootState } from "../states/IRootState";

function mapStateToProps(state: IRootState, ownProps: IOwnProps): IReadProps {
  return {
    website: state.user.websites.find((w) => w.id === ownProps.params.id)
  } as IReadProps;
}

function mapDispatchToProps(dispatch: Function): IReadProps {
  return {

  } as IReadProps;
}

// tslint:disable-next-line:no-default-export
export default connect(mapStateToProps, mapDispatchToProps)(Read);
