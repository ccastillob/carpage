import { types } from '../types/types';

const initialState = {};

export const discountReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.discountData:
      return {
        ...state,
        ...action.payload,
      };
    case types.discountResetData:
      return initialState;
    default:
      return state;
  }
};
