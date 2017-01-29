import * as React from "react";
import { Drawer as RebassDrawer } from "rebass";
import { DrawerMenu } from "./DrawerMenu";

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
        <DrawerMenu to="/" icon="grid">すべて</DrawerMenu>
      </RebassDrawer>
    );
  }
}
