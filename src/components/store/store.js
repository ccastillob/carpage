import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { rootReducers } from '../../reducers/rootReducers';

const isProduction = () => process.env.NODE_ENV === 'production';
const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export function configureStore() {
  const applyMiddlewareBuild = applyMiddleware(thunk);
  const store = createStore(
    rootReducers,
    isProduction()
      ? applyMiddlewareBuild
      : composeEnhancers(applyMiddlewareBuild)
  );

  return store;
}
