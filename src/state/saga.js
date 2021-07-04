import {fork, all} from 'redux-saga/effects';
import loader from './loader/watcher';
import weather from './weather/watcher';

export default function* rootSaga() {
  yield all([fork(loader), fork(weather)]);
}
