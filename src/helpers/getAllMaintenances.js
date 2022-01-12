
import { fetchData } from './fetch';

export const getAllMaintenances = async() => {

	const resp = await fetchData('maintenance/all');
	const data = await resp.json();

	return data;

}