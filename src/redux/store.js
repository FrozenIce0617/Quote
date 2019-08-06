import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createBrowserHistory as createHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';

import sagas from './sagas';
import reducers from './reducers';

const history = createHistory();
const sagaMiddleware = createSagaMiddleware();
const routeMiddleware = routerMiddleware(history);

const middlewares = [sagaMiddleware, routeMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const store = createStore(
  combineReducers({ ...reducers, router: connectRouter(history) }),
  composeWithDevTools(applyMiddleware(...middlewares)),
);

sagaMiddleware.run(sagas);

export default store;
