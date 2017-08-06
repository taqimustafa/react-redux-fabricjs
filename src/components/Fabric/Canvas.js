import React from 'react';
import Text from './Text';
require('fabric');

export default class CanvasBox extends React.Component {
  constructor() {
    super();
		this.state = {
			canvas: null
		}
    this.canvasContainer = null;
  }
	componentDidMount() {
		this.setState({
			canvas: new fabric.Canvas('canvas'),
		}, () => {
			this.updateDimensions();
			this.state.canvas.backgroundColor = '#16191E';
			this.state.canvas.renderAll();

			setTimeout(() => {
				const text = new Text({
					canvas: this.state.canvas
				});
			}, 0);
		});
	}
	updateDimensions() {
		setTimeout(() => {
			this.state.canvas.setHeight(this.canvasContainer.getBoundingClientRect().height);
			this.state.canvas.setWidth(this.canvasContainer.getBoundingClientRect().width);
			this.state.canvas.renderAll();
		}, 0);
	}
  render() {
    return (
			<div className={this.props.className}
				ref={(container) => {
					this.canvasContainer = container;
				}}
			>
				<canvas id="canvas"/>
			</div>
    );
  }
}
