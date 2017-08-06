require('fabric');
class FabricText {
	constructor(props) {
		const text = new fabric.Textbox('😎 Fabric.js 😎', {
			left: props.canvas.width / 2,
			top: props.canvas.height / 2,
			width: 450,
			originX: 'center',
			originY: 'center',
			textAlign: 'center',
			fill: 'white',
			fontSize: 60,
			scaleX: 2,
			scaleY: 2,
		});

		props.canvas.add(text).renderAll();
		console.log(text);
	}
}
module.exports = FabricText;
