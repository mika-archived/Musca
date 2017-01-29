import { connect } from "react-redux";
import { About, IAboutProps } from "../components/About";
import { IRootState } from "../states/IRootState";

function mapStateToProps(state: IRootState): IAboutProps {
  return {

  } as IAboutProps;
}

function mapDispatchToProps(dispatch: Function): IAboutProps {
  return {

  } as IAboutProps;
}

// tslint:disable-next-line:no-default-export
export default connect(mapStateToProps, mapDispatchToProps)(About);
