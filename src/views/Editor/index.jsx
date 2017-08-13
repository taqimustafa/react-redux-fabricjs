import { connect } from 'react-redux';
import {
  setActiveCanvas,
  setActiveObject,
  changeLanguage,
} from './EditorActionsCreator';
import Editor from './Editor';

function mapStateToProps(state) {
  return {
    canvas: state.EditorReducer.canvas,
    locale: state.EditorReducer.locale,
  };
}
export default connect(mapStateToProps, {
  setActiveCanvas,
  setActiveObject,
  changeLanguage,
})(Editor);
