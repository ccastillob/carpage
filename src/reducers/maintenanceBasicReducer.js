
import { types } from '../types/types';

const initialState = {

}

export const maintenanceBasicReducer = ( state = initialState, action ) => {

	switch ( action.type ) {
		case types.maintenanceBasicData:
			return {
				...state,
				...action.payload,
			}
		default:
			return state;
	}

}
