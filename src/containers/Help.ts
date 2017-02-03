import { connect } from "react-redux";
import { Help, IHelpProps } from "../components/Help";
import { IRootState } from "../states/IRootState";

function mapStateToProps(state: IRootState): IHelpProps {
  return {

  } as IHelpProps;
}

function mapDispatchToProps(dispatch: Function): IHelpProps {
  return {

  } as IHelpProps;
}

// tslint:disable-next-line:no-default-export
export default connect(mapStateToProps, mapDispatchToProps)(Help);
