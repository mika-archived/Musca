import { connect } from "react-redux";
import { reduxForm } from "redux-form";

import { _import } from "../actions/UserAction";
import { IIxportFormProps, IIxportProps, Ixport } from "../components/Ixport";
import { IRootState } from "../states/IRootState";

function mapStateToProps(state: IRootState): IIxportProps {
  return {

  } as IIxportProps;
}

function mapDispatchToProps(dispatch: Function): IIxportProps {
  return {
    _import: (json: any) => dispatch(_import(json)) // tslint:disable-line:no-any
  } as IIxportProps;
}

function validate(values: IIxportFormProps): IIxportFormProps {
  const errors = {} as IIxportFormProps;
  if (!values.importStr || values.importStr === "") {
    errors.importStr = "引き継ぎ用文字列を入力してください";
  }
  return errors;
}

const initialize = reduxForm({form: "Ixport", validate})(Ixport);

// tslint:disable-next-line:no-default-export
export default connect(mapStateToProps, mapDispatchToProps)(initialize);
