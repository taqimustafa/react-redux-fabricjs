import React from 'react';

import Canvas from 'components/Fabric/Canvas';
import Toolbar from './Toolbar';
import classes from './CanvasBox.scss';

require('fabric');

export default class CanvasBox extends React.Component {
  constructor() {
    super();
    this.canvasContainer = null;
  }
  render() {
    return (
      <div className={classes.canvasBox}>
        <Canvas className={classes.canvasContainer} />
      </div>
    );
  }
}
