// Importamos nuestros types y nuestro helper fetchData
import { types } from '../types/types';
import { fetchData } from '../helpers/fetch';

// Creamos una función la cual nos servirá para guardar la data(datos de SOLO el tipo de mantenimiento básico) en el estado(state) donde pasaremos el nombre del mantenimiento(basic)
export const startMaintenanceBasicData = ( nameOfMaintenance ) => {
	return async( dispatch ) => {

		// Creamos un try catch para manejar los errores
		try {
			// Hacemos uso de nuestro helper pasando el nombre del mantenimiento
			const resp = await fetchData( `maintenance/${nameOfMaintenance}` );
			const body = await resp.json();

			// Realizamos una condición si el array del mantenimiento es mayor a cero
			if( body.maintenance.length > 0 ) {
				// Almacenamos en una constante el valor que nos resulta
				const myMaintenanceBasic = body.maintenance[0];
				// Despachamos en la acción maintenanceBasicData el valor que nos resultó(en este caso seria un objeto con todos los nombres de los detalles)
				dispatch( maintenanceBasicData(myMaintenanceBasic) );
			}

		} catch (error) {
			// Capturamos el error en la consola
			console.log(error);
		}

	}

}

// En nuestra acción maintenanceBasicData pasamos el tipo(type) y el payload respectivo
const maintenanceBasicData = (data) => ({
	type: types.maintenanceBasicData,
	payload: data
});