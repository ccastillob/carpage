import { types } from '../types/types';

const initialState = {
  showImage: false,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uiShowModelImage:
      return {
        showImage: true,
      };
    case types.uiHiddenModelImage:
      return {
        showImage: false,
      };
    default:
      return state;
  }
};
