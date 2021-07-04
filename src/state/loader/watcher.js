import {takeEvery} from 'redux-saga/effects';
import {START_LOAD, STOP_LOAD} from './types';

function* syncStartLoad(action) {
  const {callback} = action;
  callback(true);
}

function* syncStopLoad(action) {
  const {callback} = action;
  callback(true);
}

export default function* loaderWatcher() {
  yield takeEvery(START_LOAD, syncStartLoad);
  yield takeEvery(STOP_LOAD, syncStopLoad);
}
