import * as React from "react";
import { Input, Text } from "rebass";

import { IWrappedFieldProps } from "../internal/ReduxFormWrapper";

interface IFieldInputProps extends IWrappedFieldProps {
  label: string;
  placeholder: string;
}

export class FieldInput extends React.Component<IFieldInputProps, void> {
  public render(): JSX.Element {
    return (
      <div style={{marginBottom: "16px"}}>
        <Input label={this.props.label}
          placeholder={this.props.placeholder}
          style={{marginBottom: "0px"}}
          type="text"
          rounded
          {...this.props.input} />
        {this.props.meta.touched && this.props.meta.error &&
          <Text small={true} color={"error"}>{this.props.meta.error}</Text>
        }
      </div>
    );
  }
}
