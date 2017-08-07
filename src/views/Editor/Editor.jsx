import React from "react";

import classes from "./Editor.scss";
import Header from "components/Header";
import CanvasBox from "components/CanvasBox";
import Sidebar from "components/Sidebar";

export default class Layout extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className={classes.fullWidth}>
        <Header/>
        <div className={classes.wrapper}>
          <Sidebar />
          <CanvasBox />
        </div>
      </div>
    );
  }
}
