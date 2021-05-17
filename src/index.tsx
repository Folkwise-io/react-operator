import React, {ReactNode} from "react";

interface Props {
  conditions: Array<[boolean, ReactNode]>;
}

export class If extends React.Component<Props> {
  render(): ReactNode {
    const {conditions} = this.props;
    const firstMatch = conditions.find(([condition]) => condition);

    if (!firstMatch) return null;
    return firstMatch[1];
  }
}
