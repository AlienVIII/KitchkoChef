import axios from 'axios';
import {
  API_ENDPOINTS,
  prettifyEndpoint,
  weatherPrettifyEndpoint,
} from './endpoints';

axios.defaults.headers.post['Content-Type'] = 'application/json';

// axios.defaults.timeout = 30000;
// const defaultTimeout = {
//   timeout: 10000,
// };

const token = 'token';
axios.defaults.headers.common.Authorization = `Basic ${token}`;

// Add a response interceptor
axios.interceptors.response.use(
  response => {
    return response;
  },
  err => {
    if (
      err.response &&
      (err.response.status === 401 ||
        err.response.status === 405 ||
        err.response.status === 403 ||
        err.response.status === 400)
    ) {
      const error = err.response.data;
      if (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(err);
  },
);

const weatherDaily = payload =>
  axios.get(
    weatherPrettifyEndpoint(API_ENDPOINTS.weather.weather),
    {...payload, timeout: 10000},
    // defaultTimeout,
  );

// const updateAvatar = ({id, avatar}) =>
//   axios.patch(
//     `${prettifyEndpoint(API_ENDPOINTS.user.account)}/${id}${
//       API_ENDPOINTS.user.updateAvatar
//     }`,
//     {avatar},
//   );

// const deleteLike = id =>
//   axios.delete(
//     `${prettifyEndpoint(API_ENDPOINTS.newsfeed.getNewsfeed)}/${id}${
//       API_ENDPOINTS.newsfeed.likes
//     }`,
//   );

const Api = {
  weatherDaily,
};
export default Api;
