import { types } from '../types/types';

const initialState = {
  customServices: [],
};

export const maintenanceCustomServiceReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case types.uploadCustomService:
      return {
        ...action.payload,
      };
    case types.updateCustomServices:
      return {
        ...action.payload,
      };
    case types.resetCustomService:
      return initialState;
    default:
      return state;
  }
};
