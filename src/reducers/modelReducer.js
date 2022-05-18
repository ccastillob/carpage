import { types } from '../types/types';

const initialState = {};

export const modelReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.modelData:
      return {
        ...state,
        ...action.payload,
      };
    case types.modelResetData:
      return initialState;
    default:
      return state;
  }
};
