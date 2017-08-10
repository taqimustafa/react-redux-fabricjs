require('fabric');
const Store = require('store/index.js');

class FabricText {
  constructor(props) {
    this.canvas = Store.default.getState().FabricReducer.canvas;
    if (this.canvas) {
      const text = new fabric.Textbox('Hello World 😎', {
        left: this.canvas.width / 2,
        top: this.canvas.height / 2,
        width: 200,
        originX: 'center',
        originY: 'center',
        textAlign: 'center',
        fill: '#000000',
        fontSize: 20,
        scaleX: 2,
        scaleY: 2,
      });
      this.canvas.add(text).renderAll();
    }
  }
}
module.exports = FabricText;
