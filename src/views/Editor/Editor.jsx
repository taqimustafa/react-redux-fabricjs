import React from 'react';
import PropTypes from 'prop-types';
import classes from './Editor.scss';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import Canvas from 'components/Fabric/Canvas';

export default class Layout extends React.Component {
  render() {
    return (
      <div className={classes.fullWidth}>
        <Header changeLanguage={this.props.changeLanguage} />
        <div className={classes.wrapper}>
          <Sidebar />
          <div className={classes.canvasBox}>
            <Canvas
              className={classes.canvasContainer}
              setActiveCanvas={this.props.setActiveCanvas}
            />
          </div>
        </div>
      </div>
    );
  }
}

Layout.propTypes = {
  setActiveCanvas: PropTypes.func.isRequired,
  changeLanguage: PropTypes.func.isRequired,
};
Layout.defaultProps = {
  setActiveCanvas: null,
};
