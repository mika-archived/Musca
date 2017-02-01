import { connect } from "react-redux";
import { App, IAppProps } from "../components/App";
import { IRootState } from "../states/IRootState";

function mapStateToProps(state: IRootState): IAppProps {
  return {
    websites: state.user.websites
  } as IAppProps;
}

function mapDispatchToProps(dispatch: Function): IAppProps {
  return {

  } as IAppProps;
}

// tslint:disable-next-line:no-default-export
export default connect(mapStateToProps, mapDispatchToProps)(App);
