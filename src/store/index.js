import { createStore, applyMiddleware, compose } from "redux";
import { reducer } from '../reducers';
import ReduxThunk from 'redux-thunk'
import logger from 'redux-logger';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhancers(
    applyMiddleware(logger, ReduxThunk)
));