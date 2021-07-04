const weatherDomain = 'https://api.openweathermap.org/data/2.5';
export const appid = 'e5e9b20aee8a7de0f215ee849b9077f8'; ///'2d24ff5cae6340c6e609ee8454954dc8';

const domain = '';

export const API_ENDPOINTS = {
  instant: '/instant.json',
  weather: {
    onecall: '/onecall',
    weather: '/weather',
  },
};

const constructUrlEndPoint = api => `${domain}${api}`;

const weatherConstructUrlEndPoint = api => `${weatherDomain}${api}`;

const formatStringUrl = (...args) => {
  let i = 1;
  const str = args[0];
  return str.replace(/\{\}/g, () => args[i++]);
};

export const weatherPrettifyEndpoint = (api, ...args) =>
  formatStringUrl(weatherConstructUrlEndPoint(api), args);

export const prettifyEndpoint = (api, ...args) =>
  formatStringUrl(constructUrlEndPoint(api), args);
