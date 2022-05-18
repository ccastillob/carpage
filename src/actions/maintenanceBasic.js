import { types } from '../types/types';
import { fetchData } from '../helpers/fetch';

export const startMaintenanceBasicData = (nameOfMaintenance) => {
  return async (dispatch) => {
    try {
      const resp = await fetchData(`maintenance/${nameOfMaintenance}`);
      const body = await resp.json();

      if (body.maintenance.length > 0) {
        const myMaintenanceBasic = body.maintenance[0];
        dispatch({
          type: types.maintenanceBasicData,
          payload: myMaintenanceBasic,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
