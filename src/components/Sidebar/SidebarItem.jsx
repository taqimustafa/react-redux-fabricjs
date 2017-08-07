import React from "react";

import classes from "./Sidebar.scss";
export default class Sidebar extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div
        className={classes.listItem}
        onClick = {() => {
          this.props.onClick()
        }}
      >
        {this.props.children}
      </div>
    );
  }
}
