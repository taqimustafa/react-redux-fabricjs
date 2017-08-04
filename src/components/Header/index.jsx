import React from "react";
import classes from "./Header.scss";

export default class Header extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <nav className={`navbar navbar-default ${classes.navbar}`}>
        <div className="navbar-header">
          <a className="navbar-brand">
            Designer Tool
          </a>
          <div className="navbar-tools hidden-sm hidden-xs"></div>
        </div>
      </nav>
    );
  }
}
