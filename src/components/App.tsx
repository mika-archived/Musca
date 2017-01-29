import * as React from "react";
import Icon from "react-geomicons";
import { Link } from "react-router";
import { Fixed, NavItem, Space, Toolbar } from "rebass";
import { Drawer } from "./Drawer";

export interface IAppProps {}
interface IAppState {
  isOpen: boolean;
}

export class App extends React.Component<IAppProps, IAppState> {
  public constructor(props: IAppProps) {
    super(props);
    this.state = {isOpen: false};
  }

  public render(): JSX.Element {
    return (
      <div>
        <Fixed top={true} left={true} right={true}>
          <Toolbar>
            <NavItem is={"a"} {...{onClick: this.onClick.bind(this), style: {width: "48px"}}}>
              <Icon name="list"
                style={{height: "28px", width: "28px"}} />
            </NavItem>
            <Space  x={1} auto />
            <NavItem is={Link} {...{to: "/about"}}>
              About
            </NavItem>
          </Toolbar>
        </Fixed>
        <Drawer isOpen={this.state.isOpen} onDismiss={this.onDismiss.bind(this)} />
        <div style={{paddingTop: "48px"}}>
          {this.props.children}
        </div>
      </div>
    );
  }

  private onClick(): void {
    this.setState({isOpen: true});
  }

  private onDismiss(): void {
    this.setState({isOpen: false});
  }
}
