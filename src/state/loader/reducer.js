import {START_LOAD, STOP_LOAD, UPDATE_NET_STATUS} from './types';

const INITIAL_STATE = {
  isFetching: false,
  isConnected: true,
  errorMessage: '',
  mess: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_NET_STATUS: {
      const {isConnected} = action;
      return {...state, isConnected};
    }
    case START_LOAD: {
      const {mess} = action;
      return {...state, mess, isFetching: true};
    }

    case STOP_LOAD: {
      return {...state, mess: '', isFetching: false};
    }

    default:
      return state;
  }
};
