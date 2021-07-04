// Importamos nuestros types y nuestro helper fetchData
import { types } from '../types/types';
import { fetchData } from '../helpers/fetch';

// Creamos una función la cual nos servirá para guardar la data(datos de SOLO un modelo) en el estado(state) donde pasaremos el nombre del modelo
export const startModelData = (nameOfModel) => {
	return async( dispatch ) => {

		// Creamos un try catch para manejar los errores
		try {
			// Hacemos uso de nuestro helper pasando el nombre del modelo
			const resp = await fetchData( `model/${nameOfModel}` );
			const body = await resp.json();

			// Realizamos una condición si el array de los modelos es mayor a cero
			if( body.model.length > 0 ) {
				// Almacenamos en una constante el valor que nos resulta
				const myModel = body.model[0];
				// Despachamos en la acción modelData el valor que nos resultó(en este caso seria un objeto)
				dispatch( modelData(myModel) );
			}else {
				// Si el array es igual a cero entonces lo redireccionaremos a la página de los modelos(actualmente estamos en ModelDetails)
				window.location.assign('/models');
			}

		} catch (error) {
			// Capturamos el error en la consola
			console.log(error);
		}

	}
}

// Creamos una función que nos servirá para resetear la data del estado(state)
export const resetModelData = () => {

	return async( dispatch ) => {

		// Creamos un try catch para manejar los errores
		try {

			// Despachamos en la acción resetData el valor del estado inicial(en este caso seria un objeto vacio {})
			dispatch( resetData() );

		} catch (error) {
			// Capturamos el error en la consola
			console.log(error);
		}

	}

}

// En nuestra acción resetData pasamos el tipo(type) respectivo
const resetData = () => ({
	type: types.modelResetData
});

// En nuestra accion modelData pasamos el tipo(type) y el payload respectivo
const modelData = (data) => ({
	type: types.modelData,
	payload: data
});