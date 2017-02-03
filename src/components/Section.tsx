import * as React from "react";
import { Section as RebassSection, SectionHeader } from "rebass";

interface ISectionProps {
  heading: string;
}

export class Section extends React.Component<ISectionProps, void> {
  public render(): JSX.Element {
    return (
      <RebassSection style={{paddingTop: "32px"}}>
        <SectionHeader heading={this.props.heading} />
        {this.props.children}
      </RebassSection>
    );
  }
}
