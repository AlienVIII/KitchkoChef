import {
  GET_DAILY_WEATHER,
  GET_DAILY_WEATHER_SUCCESS,
  GET_DAILY_WEATHER_FAIL,
  GET_FUTURE_WEATHER_SUCCESS,
} from './types';

const INITIAL_STATE = {
  isFetching: false,
  errorMessage: '',
  weather: [{}],
  hourly: [],
  todayMax: 0,
  todayMin: 0,
  tomorrowMax: 0,
  tomorrowMin: 0,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_DAILY_WEATHER: {
      return {...state, isFetching: true};
    }
    case GET_DAILY_WEATHER_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        weather: action.payload,
      };
    }
    case GET_FUTURE_WEATHER_SUCCESS: {
      const {hourly = [], daily = []} = action.payload;
      return {
        ...state,
        todayMax: hourly[3]?.temp, // next 3 hours
        todayMin: daily[0]?.temp?.min || hourly[3]?.temp,
        hourly: [hourly[4], hourly[5], hourly[6]], // store next 3 hours for discontection case
        tomorrowMax: daily[1]?.temp?.max,
        tomorrowMin: daily[1]?.temp?.min,
      };
    }
    case GET_DAILY_WEATHER_FAIL: {
      return {
        ...state,
        isFetching: false,
        errorMessage: action.errorMessage,
        todayMax:
          state.hourly?.length > 0 ? state.hourly[0]?.temp : state.todayMax,
        hourly: state.hourly?.length > 0 ? [] : state.hourly?.shift(),
      };
    }
    default:
      return state;
  }
};
