// Importamos nuestros types y nuestro helper fetchData
import { types } from '../types/types';
import { fetchData } from '../helpers/fetch';

// Creamos una función la cual nos servirá para guardar la data(datos de SOLO el tipo de mantenimiento avanzado) en el estado(state) donde pasaremos el nombre del mantenimiento(advanced)
export const startMaintenanceAdvancedData = ( nameOfMaintenance ) => {
	return async( dispatch ) => {

		// Creamos un try catch para manejar los errores
		try {
			// Hacemos uso de nuestro helper pasando el nombre del mantenimiento
			const resp = await fetchData( `maintenance/${nameOfMaintenance}` );
			const body = await resp.json();

			// Realizamos una condición si el array del mantenimiento es mayor a cero
			if( body.maintenance.length > 0 ) {
				// Almacenamos en una constante el valor que nos resulta
				const myMaintenanceAdvanced = body.maintenance[0];
				// Despachamos en la acción maintenanceAdvancedData el valor que nos resultó(en este caso seria un objeto con todos los nombres de los detalles)
				dispatch( maintenanceAdvancedData(myMaintenanceAdvanced) );
			}

		} catch (error) {
			// Capturamos el error en la consola
			console.log(error);
		}

	}

}

// En nuestra acción maintenanceAdvancedData pasamos el tipo(type) y el payload respectivo
const maintenanceAdvancedData = (data) => ({
	type: types.maintenanceAdvancedData,
	payload: data
});