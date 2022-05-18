import { types } from '../types/types';

const initialState = {
  cart: [],
};

export const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.initializateCart:
      return {
        cart: action.payload,
      };
    case types.addToCart:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case types.removeToCart:
      return {
        ...state,
        cart: [...action.payload],
      };
    default:
      return state;
  }
};
