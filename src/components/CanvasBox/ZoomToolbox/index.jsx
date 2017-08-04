import React from "react";

import Fabric_Zoom from "components/CanvasBox/fabric-components/Zoom.js";
import classes from "./ZoomToolbox.scss";

export default class ZoomToolbox extends React.Component {
  constructor() {
    super();
    this.state = {
      zoom:null
    }
  }
  componentDidMount(){
    this.setState({
      zoom: new Fabric_Zoom()
    });
  }
  zoomOut(){
    this.state.zoom.zoomOut();
  }
  zoomIn(){
    this.state.zoom.zoomIn();
  }
  render() {
    return (
      <div className="canvas-toolbox">
        <i onClick={this.zoomOut.bind(this)} className="fa fa-search-minus" aria-hidden="true"></i>
        <i onClick={this.zoomIn.bind(this)} className="fa fa-search-plus" aria-hidden="true"></i>
      </div>
    );
  }
}
