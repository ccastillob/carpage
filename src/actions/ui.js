import { types } from 'types/types';

export const showImageProduct = () => {
  return (dispatch) => {
    dispatch({
      type: types.uiShowModelImage,
    });
  };
};

export const hiddenImageProduct = () => {
  return (dispatch) => {
    dispatch({
      type: types.uiHiddenModelImage,
    });
  };
};
