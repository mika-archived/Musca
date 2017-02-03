import { connect } from "react-redux";
import { IIxportProps, Ixport } from "../components/Ixport";
import { IRootState } from "../states/IRootState";

function mapStateToProps(state: IRootState): IIxportProps {
  return {

  } as IIxportProps;
}

function mapDispatchToProps(dispatch: Function): IIxportProps {
  return {

  } as IIxportProps;
}

// tslint:disable-next-line:no-default-export
export default connect(mapStateToProps, mapDispatchToProps)(Ixport);
