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
    console.log(this.canvasContainer.getBoundingClientRect());
    canvas.setHeight(600);
    canvas.setWidth(1100);
    canvas.renderAll();
  }

  render() {
    return (
      <div className={classes.canvasBox}>
        <Toolbar activeObject={null}/>
        <div
          className="section no-pad-bot no-pad-top"
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
