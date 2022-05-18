import { fetchData } from './fetch';

export const getAllModels = async () => {
  const resp = await fetchData('model/all');
  const data = await resp.json();

  return data;
};
