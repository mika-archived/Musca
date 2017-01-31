import { connect } from "react-redux";
import { reduxForm } from "redux-form";

import { register } from "../actions/UserAction";
import { INewFormProps, INewProps, New } from "../components/New";
import { IRootState } from "../states/IRootState";

function mapStateToProps(state: IRootState): INewProps {
  return {
  } as INewProps;
}

function mapDispatchToProps(dispatch: Function): INewProps {
  return {
    register: (name: string, url: string) => dispatch(register(name, url))
  } as INewProps;
}

function validate(values: INewFormProps): INewFormProps {
  const errors = {} as INewFormProps;
  if (!values.name || values.name === "") {
    errors.name = "名前を入力してください";
  }
  if (!values.url) {
    errors.url = "URL を入力してください";
  }
  return errors;
}

const initialize = reduxForm({form: "New", validate})(New);

// tslint:disable-next-line:no-default-export
export default connect(mapStateToProps, mapDispatchToProps)(initialize);
// export default reduxForm({form: "New", validate})(New);
