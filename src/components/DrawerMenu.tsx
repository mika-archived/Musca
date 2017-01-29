import * as React from "react";
import Icon from "react-geomicons";
import { Link } from "react-router";
import { Divider } from "rebass";

interface IDrawerMenuProps {
  to: string;
  icon: string;
}

export class DrawerMenu extends React.Component<IDrawerMenuProps, void> {
  public render(): JSX.Element {
    const styles = {
      divider: {
        marginBottom: 0,
        marginLeft: "46px",
        marginTop: 0,
      } as React.CSSProperties,
      icon: {
        color: "#08e",
        height: "28px",
        width: "28px"
      } as React.CSSProperties,
      link: {
        color: "#08e",
        fontSize: "14px",
        lineHeight: "1rem",
        marginLeft: "10px",
        textDecoration: "none",
      } as React.CSSProperties,
      root: {
        alignItems: "center",
        display: "flex",
        height: "48px",
        maxHeight: "48px",
        minHeight: "48px",
        padding: "0px 8px",
      } as React.CSSProperties,
    };
    return (
      <div>
        <div style={styles.root}>
          <Icon name={this.props.icon} style={styles.icon} />
          <Link to={this.props.to} style={styles.link}>
            {this.props.children}
          </Link>
        </div>
        <Divider style={styles.divider} />
      </div>
    );
  }
}
