import axios from 'axios';
import api from '../../services/api';
import endPoints from '../../services/endPoints';

export const getBreweriesList = async ({params}) => {
  const {data} = await api.get(endPoints.breweries, {params});
  return data;
};

let cancelToken;

export const searchBreweriesList = async ({params}) => {
  if (typeof cancelToken !== typeof undefined) {
    cancelToken.cancel();
  }
  cancelToken = axios.CancelToken.source();
  const {data} = await api.get(endPoints.breweriesSearch, {
    params,
    cancelToken: cancelToken.token,
  });
  return data;
};
