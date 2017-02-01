import * as React from "react";
import { Drawer as RebassDrawer } from "rebass";

import { IRss } from "../models/IRss";
import { DrawerMenu } from "./DrawerMenu";

interface IDrawerProps {
  websites: IRss[];
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
        {this.props.websites.map((w) => {
          return (
            <DrawerMenu key={w.id} to={`/read/${w.id.replace(/https?:\/\//, "")}`} icon="bookmark">{w.name}</DrawerMenu>
          );
        })}
        <DrawerMenu to="new" icon="compose">購読サイトを追加</DrawerMenu>
      </RebassDrawer>
    );
  }
}
