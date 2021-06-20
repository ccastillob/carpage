
import { types } from '../types/types';
import { fetchData } from '../helpers/fetch';

export const startMaintenanceBasicData = ( nameOfMaintenance ) => {

	return async( dispatch ) => {

		try {

			const resp = await fetchData( `maintenance/${nameOfMaintenance}` );
			const body = await resp.json();

			if( body.maintenance.length > 0 ) {
				const myMaintenanceBasic = body.maintenance[0];
				dispatch( maintenanceBasicData(myMaintenanceBasic) )
			}

		} catch (error) {
			console.log(error)
		}

	}

}

const maintenanceBasicData = (data) => ({
	type: types.maintenanceBasicData,
	payload: data
})