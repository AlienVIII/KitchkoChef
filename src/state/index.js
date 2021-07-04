import {createStore, applyMiddleware, compose} from 'redux';
import Reactotron from 'reactotron-react-native';
import createSagaMiddleware from 'redux-saga';
import 'configs/ReactotronConfig';
import {persistStore} from 'redux-persist';
import reducers from './rootReducer';
import rootSagas from './saga';

const sagaMiddleware = createSagaMiddleware();

let storeInit;
if (__DEV__) {
  if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
    storeInit = createStore(
      compose(
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
          applyMiddleware(sagaMiddleware),
        ),
        Reactotron.createEnhancer(),
      ),
    );
  } else {
    storeInit = createStore(
      reducers,
      compose(applyMiddleware(sagaMiddleware), Reactotron.createEnhancer()),
    );
  }
} else {
  storeInit = createStore(reducers, compose(applyMiddleware(sagaMiddleware)));
}
sagaMiddleware.run(rootSagas);
export const persistor = persistStore(storeInit);
export const store = storeInit;
