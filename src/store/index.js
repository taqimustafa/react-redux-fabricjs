import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import logger from 'redux-logger';
import rootReducer from 'reducers/index.js';

export default createStore(
  rootReducer,
	applyMiddleware(promise, thunk, logger),
);
