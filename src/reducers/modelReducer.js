// Importamos nuestros types
import { types } from '../types/types';

// Creamos un estado inicial con un objeto vacio
const initialState = {

}

// Exportamos nuestra función reductora
export const modelReducer = ( state = initialState, action ) => {

	switch ( action.type ) {
		case types.modelData:
			return {
				...state,
				...action.payload
			}
		case types.modelResetData:
			return initialState
		default:
			return state
	}

}
