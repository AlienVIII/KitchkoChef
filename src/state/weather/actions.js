import {GET_DAILY_WEATHER} from './types';

export const getDailyWeather = (params, callback = () => {}) => ({
  type: GET_DAILY_WEATHER,
  payload: params,
  callback,
});
