import { combineReducers } from 'redux';
import EditorReducer from 'views/Editor/EditorReducer.js';

const allReducers = combineReducers({
  EditorReducer,
});

export default allReducers;
