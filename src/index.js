/**
 * @format
 * @flow strict-local
 */

import React from 'react';
// Libs
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
// Components
import Screens from './AppLoading';
import {store, persistor} from 'state';

const App: () => React$Node = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Screens />
    </PersistGate>
  </Provider>
);

export default App;
