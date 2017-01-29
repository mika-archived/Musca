import * as React from "react";
import { Link } from "react-router";
import { Divider, Drawer as RebassDrawer, Panel, Text} from "rebass";

interface IDrawerProps {
  isOpen: boolean;
  onDismiss: () => boolean;
}

export class Drawer extends React.Component<IDrawerProps, void> {

  public render(): JSX.Element {
    return (
      <RebassDrawer backgroundColor={"white"}
        color={"black"}
        onDismiss={this.props.onDismiss}
        open={this.props.isOpen}
        position={"left"}
        style={{margin: "-1px", padding: "0px"}} >
        <Link to="/">すべて</Link>
        <Divider />
      </RebassDrawer>
    );
  }
}