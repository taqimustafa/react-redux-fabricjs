import React from "react";

import classes from "./CanvasBox.scss";
import Toolbar from "./Toolbar";

import Canvas from "./fabric-components/Canvas.js";
import Image from "./fabric-components/Image.js";
import Text from "./fabric-components/Text.js";

export default class CanvasBox extends React.Component {
  constructor() {
    super();
    this.canvasContainer = null;
  }
  componentWillMount(){

  }
  componentDidMount(){
    const canvas = new fabric.Canvas('canvas');
    setTimeout(() => {
      console.log(this.canvasContainer.getBoundingClientRect());
      canvas.setHeight(this.canvasContainer.getBoundingClientRect().height);
      canvas.setWidth(this.canvasContainer.getBoundingClientRect().width);
      canvas.renderAll();
    }, 100);
  }

  render() {
    return (
      <div className={classes.canvasBox}>
        <Toolbar activeObject={null}/>
        <div className={classes.canvasContainer}
          ref={(container) => {
            this.canvasContainer = container;
          }}
        >
          <canvas id = "canvas"></canvas>
        </div>
      </div>
    );
  }
}
