import * as React from "react";
import { Link } from "react-router";
import { Divider } from "rebass";

interface IEnrtyProps {
  id: string;
  title: string;
}

export class Entry extends React.Component<IEnrtyProps, void> {
  public render(): JSX.Element {
    const styles = {
      divider: {
        marginBottom: 0,
        marginTop: 0,
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
        minHeight: "24px",
        padding: "8px",
      } as React.CSSProperties,
    };
    return (
      <div>
        <div style={styles.root}>
          <Link to={`/read/${this.props.id}`} style={styles.link}>
            {this.props.title}
          </Link>
        </div>
        <Divider style={styles.divider} />
      </div>
    );
  }
}
