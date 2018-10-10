import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from 'reducers/reducers';
import createSagaMiddleware from 'redux-saga';
import { initSagas } from 'initSagas';

const logger = createLogger({
  collapsed: true,
});

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();

  const getMiddleware = () => {
    if (process.env.NODE_ENV === 'development') {
      return applyMiddleware(sagaMiddleware, thunk, logger);
    }
    return applyMiddleware(sagaMiddleware, thunk);
  };

  const store = createStore(
    reducer,
    initialState,
    getMiddleware(),
  );

  initSagas(sagaMiddleware);
  return store;
}
