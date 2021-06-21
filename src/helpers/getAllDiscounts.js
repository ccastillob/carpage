// Importamos nuestro helper
import { fetchData } from './fetch';

// Creamos una función para obtener todos los descuentos
export const getAllDiscounts = async() => {

	// Hacemos uso de nuestro helper para traer todos los descuentos
	const resp = await fetchData('discount/all');
	const data = await resp.json();

	// Retornamos la data
	return data;

}