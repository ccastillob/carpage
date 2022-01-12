
import { types } from '../types/types';
import { fetchData } from '../helpers/fetch';

export const startMaintenanceAdvancedData = ( nameOfMaintenance ) => {
	return async( dispatch ) => {

		try {

			const resp = await fetchData( `maintenance/${nameOfMaintenance}` );
			const body = await resp.json();

			if( body.maintenance.length > 0 ) {

				const myMaintenanceAdvanced = body.maintenance[0];
				dispatch( maintenanceAdvancedData( myMaintenanceAdvanced ) );

			}

		} catch (error) {
			console.log(error);
		}

	}
}

const maintenanceAdvancedData = (data) => ({
	type: types.maintenanceAdvancedData,
	payload: data,
})