// Importamos nuestro helper
import { fetchData } from './fetch';

// Creamos una función para obtener todos los modelos
export const getAllModels = async() => {

	// Hacemos uso de nuestro helper para traer todos los modelos
	const resp = await fetchData('model/all');
	const data = await resp.json();

	// Retornamos la data
	return data;

}