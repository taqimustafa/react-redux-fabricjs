require('fabric');
const Store = require('store/index.js');

class FabricText {
	constructor(props) {
		this.canvas = Store.default.getState().FabricReducer.canvas;
		console.log('Add text called', this.canvas);
		if(this.canvas){
			const text = new fabric.Textbox('Hello World 😎', {
				left: this.canvas.width / 2,
				top: this.canvas.height / 2,
				width: 450,
				originX: 'center',
				originY: 'center',
				textAlign: 'center',
				fill: 'white',
				fontSize: 60,
				scaleX: 2,
				scaleY: 2,
			});
			this.canvas.add(text).renderAll();
		}
	}
}
module.exports = FabricText;
