require('fabric');
const Store = require('store/index.js');

class FabricImage {
  constructor(props) {
    this.canvas = Store.default.getState().FabricReducer.canvas;
    if (this.canvas) {
      // Add Image code over here
    }
  }
}
module.exports = FabricImage;

