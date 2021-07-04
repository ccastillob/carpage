// Importamos nuestros types
import { types } from '../types/types';

// Creamos un estado inicial con un objeto vacio
const initialState = {

}

// Exportamos nuestra función reductora
export const discountReducer = ( state = initialState, action ) => {

	switch ( action.type ) {
		case types.discountData:
			return {
				...state,
				...action.payload
			}
		case types.discountResetData:
			return initialState
		default:
			return state
	}

}