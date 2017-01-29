import * as React from "react";

export interface IRootProps {}
interface IRootState {}

export class Root extends React.Component<IRootProps, IRootState> {
  public render(): JSX.Element {
    return (
      <div>
        るーと
      </div>
    );
  }
}
