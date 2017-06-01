import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {routerReducer} from 'react-router-redux';

import resetEnhancer from './enhancer/reset.js';

const originalReducers = {
  routing: routerReducer
}
const reducer = combineReducers(originalReducers);

const win = window;

const middlewares = [];
if(process.env.NODE_ENV !== 'production') {
  middlewares.push(require('redux-immutable-state-invariant').default());
}

const storeEnhancers = compose(
  resetEnhancer,
  applyMiddleware(...middlewares),
  (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f
);

const initValues = {
};

const store = createStore(reducer, initValues, storeEnhancers);
store._reducers = originalReducers;

export default store;
