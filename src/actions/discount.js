// Importamos nuestros types y nuestro helper fetchData
import { types } from '../types/types';
import { fetchData } from '../helpers/fetch';

// Creamos una función la cual nos servirá para guardar la data(datos de SOLO un descuento) en el estado(state) donde pasaremos el nombre del descuento
export const startDiscountData = (nameOfDiscount) => {
	return async( dispatch ) => {

		// Creamos un try catch para manejar los errores
		try {
			// Hacemos uso de nuestro helper pasando el nombre del descuento
			const resp = await fetchData(`discount/${nameOfDiscount}`);
			const body = await resp.json();

			//Realizamos una condición si el array de los descuentos es mayor a cero
			if( body.discount.length > 0 ) {
				// Almacenamos en una constante el valor que nos resulta
				const myDiscount = body.discount[0];
				// Despachamos en la acción discounData el valor que nos resultó(en este caso seria un objeto)
				dispatch( discountData(myDiscount) );
			}else {
				// Si el array es igual a cero entonces lo redireccionaremos a la página de los descuentos(actualmente estamos en DiscountDetails)
				window.location.assign('/discounts');
			}

		} catch (error) {
			// Capturamos el error en la consola
			console.log(error);
		}

	}
}

// Creamos una función que nos servirá para resetear la data del estado(state)
export const resetDiscountData = () => {

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
	type: types.discountResetData
});

// En nuestra accion discountData pasamos el tipo(type) y el payload respectivo
const discountData = (data) => ({
	type: types.discountData,
	payload: data
});
