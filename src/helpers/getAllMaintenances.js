// Importamos nuestro helper
import { fetchData } from './fetch';

// Creamos una función para obtener todos los mantenimientos
export const getAllMaintenances = async() => {

	// Hacemos uso de nuestro helper para traer todos los mantenimientos
	const resp = await fetchData('maintenance/all');
	const data = await resp.json();

	// Retornamos la data
	return data;

}