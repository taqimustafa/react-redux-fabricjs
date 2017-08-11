import { connect } from 'react-redux';
import { setActiveCanvas } from './EditorActionsCreator';
import Editor from './Editor';

function mapStateToProps(state) {
  return {
    fabric: state,
  };
}
export default connect(mapStateToProps, { setActiveCanvas })(Editor);
