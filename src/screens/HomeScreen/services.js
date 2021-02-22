import api from '../../services/api';
import endPoints from '../../services/endPoints';

export const getBreweriesList = async ({params}) => {
  const {data} = await api.get(endPoints.breweries, {params});
  return data;
};
