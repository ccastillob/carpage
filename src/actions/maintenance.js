import { types } from '../types/types';

export const startMaintenanceCustomService = (
  maintenanceID,
  name,
  services
) => {
  return (dispatch) => {
    const currentCustomService = {
      id: maintenanceID,
      name,
      customServices: services,
    };

    dispatch({
      type: types.uploadCustomService,
      payload: currentCustomService,
    });
  };
};

export const updateMaintenanceCustomServices = (
  maintenanceID,
  name,
  services
) => {
  return (dispatch) => {
    const newStateOfCustomServices = {
      id: maintenanceID,
      name,
      customServices: services,
    };

    dispatch({
      type: types.updateCustomServices,
      payload: newStateOfCustomServices,
    });
  };
};

export const resetMaintenanceCustomServices = () => {
  return (dispatch) => {
    dispatch({
      type: types.resetCustomService,
    });
  };
};
