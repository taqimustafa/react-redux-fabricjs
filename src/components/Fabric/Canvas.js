import React from 'react';
require('fabric');

export default class CanvasBox extends React.Component {
  constructor() {
    super();
    this.canvasContainer = null;
  }
	componentDidMount() {
		const canvas = new fabric.Canvas('canvas');
		setTimeout(() => {
			canvas.setHeight(this.canvasContainer.getBoundingClientRect().height);
			canvas.setWidth(this.canvasContainer.getBoundingClientRect().width);
			canvas.backgroundColor = '#16191E';

			const text = new fabric.Textbox('😎 Fabric.js 😎', {
				left: canvas.width / 2,
				top: canvas.height / 2,
				width: 450,
				originX: 'center',
				originY: 'center',
				textAlign: 'center',
				fill: 'white',
				fontSize: 60,
				scaleX: 2,
				scaleY: 2,
			});
			canvas.add(text);
			canvas.renderAll();
		}, 10);
	}
  render() {
    return (
			<div
				style={{
					width: '100%',
					height: 'calc(100% - 40px)',
				}}
				ref={(container) => {
					this.canvasContainer = container;
				}}
			>
				<canvas id="canvas"/>
			</div>
    );
  }
}
