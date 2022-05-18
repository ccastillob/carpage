import { types } from 'types/types';

export const updateListColors = (id, name, image) => {
  return (dispatch) => {
    const updateListCurrentProduct = {
      id,
      name,
      image,
    };

    dispatch({
      type: types.updateProduct,
      payload: updateListCurrentProduct,
    });
  };
};

export const resetCurrentProduct = () => {
  return (dispatch) => {
    dispatch({
      type: types.resetProduct,
    });
  };
};
