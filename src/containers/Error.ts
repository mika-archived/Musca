import { connect } from "react-redux";
import { Error, IErrorProps } from "../components/Error";
import { IRootState } from "../states/IRootState";

function mapStateToProps(state: IRootState): IErrorProps {
  return {

  } as IErrorProps;
}

function mapDispatchToProps(dispatch: Function): IErrorProps {
  return {

  } as IErrorProps;
}

// tslint:disable-next-line:no-default-export
export default connect(mapStateToProps, mapDispatchToProps)(Error);
