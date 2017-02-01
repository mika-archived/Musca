import { connect } from "react-redux";
import { IReadProps, Read } from "../components/Read";
import { IRootState } from "../states/IRootState";

function mapStateToProps(state: IRootState): IReadProps {
  return {

  } as IReadProps;
}

function mapDispatchToProps(dispatch: Function): IReadProps {
  return {

  } as IReadProps;
}

// tslint:disable-next-line:no-default-export
export default connect(mapStateToProps, mapDispatchToProps)(Read);
