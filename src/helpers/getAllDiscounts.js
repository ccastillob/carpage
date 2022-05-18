import { fetchData } from './fetch';

export const getAllDiscounts = async () => {
  const resp = await fetchData('discount/all');
  const data = await resp.json();

  return data;
};
