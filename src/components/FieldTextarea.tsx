import * as React from "react";
import { Text, Textarea } from "rebass";

import { IWrappedFieldProps } from "../internal/ReduxFormWrapper";

interface IFieldTextareaProps extends IWrappedFieldProps {
  label: string;
  name: string;
}

export class FieldTextarea extends React.Component<IFieldTextareaProps, void> {
  public render(): JSX.Element {
    return (
      <div style={{marginBottom: "16px"}}>
        <Textarea label={this.props.label}
          name={this.props.name}
          style={{marginBottom: "0px"}}
          {...this.props.input} />
        {this.props.meta.touched && this.props.meta.error &&
          <Text small={true} color={"error"}>{this.props.meta.error}</Text>
        }
      </div>
    );
  }
}
