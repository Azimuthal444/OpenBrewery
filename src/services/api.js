import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.openbrewerydb.org',
});

api.interceptors.request.use(
  async (req) => {
    console.log('Request: ', req);
    return req;
  },
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) => {
    __DEV__ && console.log('Response: ', response);
    return response;
  },
  (error) => {
    console.log(error);
    if (error.response) {
      console.log('error.response: ', error.response);
    } else {
      console.log('error.config: ', error.config);
    }
    return Promise.reject(error);
  },
);

export default api;
