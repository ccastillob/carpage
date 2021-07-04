// Importamos nuestros types
import { types } from '../types/types';

// Creamos un estado inicial con un objeto vacio
const initialState = {

}

// Exportamos nuestra función reductora
export const maintenanceBasicReducer = ( state = initialState, action ) => {

	switch ( action.type ) {
		case types.maintenanceBasicData:
			return {
				...state,
				...action.payload
			}
		default:
			return state
	}

}
