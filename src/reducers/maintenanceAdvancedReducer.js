
import { types } from '../types/types';

const initialState = {

}

export const maintenanceAdvancedReducer = ( state = initialState, action ) => {

	switch ( action.type ) {
		case types.maintenanceAdvancedData:
			return {
				...state,
				...action.payload
			}
		default:
			return state
	}

}
