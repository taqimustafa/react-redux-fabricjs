import React from 'react';
import { connect } from 'react-redux';
import Text from './Text';
import { setActiveCanvas } from 'actions/FabricActions';

require('fabric');

class CanvasBox extends React.Component {
  constructor() {
    super();
    this.state = {
      canvas: null,
    };
    this.canvasContainer = null;
  }
  componentDidMount() {
    this.setState({
      canvas: new fabric.Canvas('canvas'),
    }, () => {
      this.props.setActiveCanvas(this.state.canvas);
      this.updateDimensions();
      this.state.canvas.backgroundColor = '#16191E';
      this.state.canvas.renderAll();
    });
  }
  updateDimensions() {
    this.state.canvas.setHeight(window.innerHeight - 70);
    this.state.canvas.setWidth(window.innerWidth - 60);
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

const mapStateToProps = state => ({});
export default connect(mapStateToProps, { setActiveCanvas })(CanvasBox);
