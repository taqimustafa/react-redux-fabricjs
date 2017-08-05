import React from 'react';

import classes from './CanvasBox.scss';
import Toolbar from './Toolbar';

require('fabric');

export default class CanvasBox extends React.Component {
  constructor() {
    super();
    this.canvasContainer = null;
  }
  componentWillMount() {

  }
  componentDidMount() {
    const canvas = new fabric.Canvas('canvas');
    setTimeout(() => {
      console.log(this.canvasContainer.getBoundingClientRect());
      canvas.setHeight(this.canvasContainer.getBoundingClientRect().height);
      canvas.setWidth(this.canvasContainer.getBoundingClientRect().width);
      canvas.backgroundColor = '#16191E';

      const text = new fabric.Textbox('💕Fabric.js💕', {
        left: canvas.width / 2,
        top: canvas.height / 2,
        width: 400,
        originX: 'center',
        originY: 'center',
        textAlign: 'center',
        fill: 'white',
        fontSize: 60,
      });
      canvas.add(text);
      canvas.renderAll();
    }, 100);
  }

  render() {
    return (
      <div className={classes.canvasBox}>
        <Toolbar activeObject={null} />
        <div
          className={classes.canvasContainer}
          ref={(container) => {
            this.canvasContainer = container;
          }}
        >
          <canvas id="canvas" />
        </div>
      </div>
    );
  }
}
