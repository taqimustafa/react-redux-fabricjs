import React, {Component} from 'react';
import {connect} from 'react-redux';
import Editor from './Editor.jsx';

function mapStateToProps(state) {
  return {
    fabric: state
  };
}
export default connect(mapStateToProps)(Editor);
