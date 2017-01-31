import { connect } from "react-redux";
import { IIndexProps, Index } from "../components/Index";
import { IRootState } from "../states/IRootState";

function mapStateToProps(state: IRootState): IIndexProps {
  return {

  } as IIndexProps;
}

function mapDispatchToProps(dispatch: Function): IIndexProps {
  return {

  } as IIndexProps;
}

// tslint:disable-next-line:no-default-export
export default connect(mapStateToProps, mapDispatchToProps)(Index);
