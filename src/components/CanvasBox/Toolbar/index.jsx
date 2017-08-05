import React from "react";

import classes from "./Toolbar.scss";
import Text from "./Text";
import Image from "./Image";

export default class Toolbar extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className={classes.canvasToolbar}>
        Toolbar
      </div>
    );
  }
}
