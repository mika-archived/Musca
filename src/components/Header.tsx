import * as React from "react";
import Icon from "react-geomicons";
import { Link } from "react-router";
import { Toolbar, NavItem, Space } from "rebass";
import { Drawer } from "./Drawer";

interface IHeaderStates {
  isOpen: boolean;
}

export class Header extends React.Component<void, IHeaderStates> {
  public constructor() {
    super();
    this.state = {isOpen: false};
  }
  public render(): JSX.Element {
    return (
      <div>
        <Toolbar>
          <NavItem is={'a'} {...{onClick: this.onClickIcon.bind(this), style: {width: "48px"}}}>
            <Icon name="list" 
              style={{height: "28px", width: "28px"}} />
          </NavItem>
          <Space
            auto
            x={1}
          />
          <NavItem is={Link} small={true} {...{to: "/about"}}>
            About
          </NavItem>
        </Toolbar>
        <Drawer isOpen={this.state.isOpen} onDismiss={this.onDismiss.bind(this)} />
      </div>
    );
  }

  private onClickIcon(): void {
    this.setState({isOpen: true});
  }

  private onDismiss(): void {
    this.setState({isOpen: false});
  }
}