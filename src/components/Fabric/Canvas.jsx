import React from 'react';
import PropTypes from 'prop-types';

require('fabric');

class CanvasBox extends React.Component {
  constructor() {
    super();
    this.state = {
      canvas: null,
    };
    this.canvasContainer = null;
    this.setCanvas = this.setCanvas.bind(this);
    this.addCanvasBox = this.addCanvasBox.bind(this);
  }
  componentDidMount() {
    const canvas = new fabric.Canvas('canvas');
    canvas.backgroundColor = '#16191E';
    canvas.setHeight(window.innerHeight - 70);
    canvas.setWidth(window.innerWidth - 60);
    canvas.renderAll();
    this.setCanvas(canvas);
  }
  setCanvas(canvas) {
    this.props.setActiveCanvas(canvas);
    this.setState({
      canvas,
    }, () => {
      this.addCanvasBox();
    });
  }
  addCanvasBox() {
    const rect = new fabric.Rect({
      left: this.state.canvas.width / 2,
      top: this.state.canvas.height / 2,
      width: this.props.width,
      height: this.props.height,
      fill: 'white',
      originX: 'center',
      originY: 'center',
      selectable: false,
      evented: false,
    });
    this.state.canvas.add(rect);
    this.state.canvas.renderAll();
  }
  render() {
    return (
      <div
        className={this.props.className}
        ref={(container) => {
          this.canvasContainer = container;
        }}
      >
        <canvas id="canvas" />
      </div>
    );
  }
}

export default CanvasBox;

CanvasBox.propTypes = {
  className: PropTypes.string,
  setActiveCanvas: PropTypes.func,
  width: PropTypes.number,
  height: PropTypes.number,
};
CanvasBox.defaultProps = {
  width: 400,
  height: 400,
  setActiveCanvas: null,
  className: '',
};
