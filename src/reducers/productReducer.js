import { types } from '../types/types';

const initialState = {
  listColors: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uploadProduct:
      return {
        ...action.payload,
      };
    case types.updateProduct:
      return {
        ...state,
        listColors: [action.payload],
      };
    case types.resetProduct:
      return initialState;
    default:
      return state;
  }
};
