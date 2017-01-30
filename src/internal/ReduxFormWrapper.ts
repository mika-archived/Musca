// Wrapper interfaces of redux-form.

import { FormProps, WrappedFieldProps } from "redux-form";


// tslint:disable:no-any
export interface IFormProps<FP, P, S> extends FormProps<FP, P, S> {
  handleSubmit: (value: any) => any;
}

export interface IWrappedFieldProps extends WrappedFieldProps<any> {}
