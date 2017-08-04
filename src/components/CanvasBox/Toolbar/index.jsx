import React from "react";

import classes from "./Toolbar.scss";
import Text from "./Text";
import Image from "./Image";

export default class Toolbar extends React.Component {
  constructor() {
    super();
    this.state
  }
  render() {
    var toolbarContent;
    if (this.props.activeObject == null) {
      toolbarContent = "Home";
    }
    else if(this.props.activeObject == 'image'){
      toolbarContent = <Image />;
    }
    else if(this.props.activeObject == 'text'){
      toolbarContent = <Text />;
    }

    return (
      <div className={classes.canvasToolbar}>
        {toolbarContent}
      </div>
    );
  }
}
