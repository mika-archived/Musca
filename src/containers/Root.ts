import { connect } from "react-redux";
import { IRootProps, Root } from "../components/Root";
import { IRootState } from "../states/IRootState";

function mapStateToProps(state: IRootState): IRootProps {
  return {

  } as IRootProps;
}

function mapDispatchToProps(dispatch: Function): IRootProps {
  return {

  } as IRootProps;
}

// tslint:disable-next-line:no-default-export
export default connect(mapStateToProps, mapDispatchToProps)(Root);
