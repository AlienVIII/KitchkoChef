import {START_LOAD, STOP_LOAD, UPDATE_NET_STATUS} from './types';

export const startLoading = (mess = '', callback = () => {}) => ({
  type: START_LOAD,
  mess,
  callback,
});

export const stopLoading = (callback = () => {}) => ({
  type: STOP_LOAD,
  callback,
});

export const updateNetStatus = (isConnected, callback = () => {}) => ({
  type: UPDATE_NET_STATUS,
  isConnected,
  callback,
});
