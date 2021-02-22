import api from '../../services/api';
import endPoints from '../../services/endPoints';

export const getBreweriesList = async () => {
  const {data} = await api.get(endPoints.breweries);
  return data;
};
