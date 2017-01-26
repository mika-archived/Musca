import * as React from "react";
import { Link } from "react-router";
import { Toolbar, NavItem, Space } from "rebass";

export class Header extends React.Component<void, void> {
  public render(): JSX.Element {
    return (
      <Toolbar>
        <NavItem is={Link} {...{to: "/"}}>
          Musca
        </NavItem>
        <Space
          auto
          x={1}
        />
        <NavItem is={Link} small={true} {...{to: "/about"}}>
          About
        </NavItem>
      </Toolbar>
    );
  }
}