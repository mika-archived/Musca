import { connect } from "react-redux";

import { register } from "../actions/UserAction";
import { INewProps, New } from "../components/New";
import { IRootState } from "../states/IRootState";

function mapStateToProps(state: IRootState): INewProps {
  return {

  } as INewProps;
}

function mapDispatchToProps(dispatch: Function): INewProps {
  return {
    register
  } as INewProps;
}

// tslint:disable-next-line:no-default-export
export default connect(mapStateToProps, mapDispatchToProps)(New);
