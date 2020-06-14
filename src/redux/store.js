import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

///? spread into individual arguments
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;