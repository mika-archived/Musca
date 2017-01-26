import * as React from "react";
import { Header } from "../components/Header";

export class Root extends React.Component<void, void> {
  public render(): JSX.Element {
    return (
      <Header />
    );
  }
}