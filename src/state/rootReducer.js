import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-community/async-storage'; // defaults to localStorage for web
import {persistReducer} from 'redux-persist';
import weatherReducer from './weather/reducer';
import loaderStore from './loader/reducer';

const VERSION = 1;

const weatherStoreConfig = {
  key: 'weatherStoreConfig',
  storage: AsyncStorage,
  version: VERSION,
  blacklist: ['isFetching', 'errorMessage'],
};

const rootReducer = combineReducers({
  weatherStore: persistReducer(weatherStoreConfig, weatherReducer),
  loaderStore,
});

export default rootReducer;
