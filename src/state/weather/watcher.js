import {put, takeEvery, call} from 'redux-saga/effects';
import {
  GET_DAILY_WEATHER,
  GET_DAILY_WEATHER_SUCCESS,
  GET_DAILY_WEATHER_FAIL,
  GET_FUTURE_WEATHER_SUCCESS,
} from './types';
import Api from 'configs/api';

function* syncGetDailyWeather(action) {
  const {payload, callback} = action;
  const {q, units, appid} = payload;
  try {
    const res = yield call(Api.weatherDaily, {params: {q, units, appid}});
    // console.log('***** weatherDaily', res.data);
    yield put({type: GET_DAILY_WEATHER_SUCCESS, payload: res.data});
    const {coord = {}} = res.data;
    const resFuture = yield call(Api.getFutureWeather, {
      params: {
        lat: coord.lat,
        lon: coord.lon,
        units,
        exclude: 'minutely,alerts',
        appid,
      },
    });
    // console.log('***** getFutureWeather', res.data);
    yield put({type: GET_FUTURE_WEATHER_SUCCESS, payload: resFuture.data});
    callback(true);
  } catch (err) {
    callback(false, err);
    yield put({type: GET_DAILY_WEATHER_FAIL, errorMessage: err.message});
  }
}

export default function* weatherWatcher() {
  yield takeEvery(GET_DAILY_WEATHER, syncGetDailyWeather);
}
