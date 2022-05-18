import { types } from '../types/types';
import { fetchData } from '../helpers/fetch';

export const startModelData = (nameOfModel) => {
  return async (dispatch) => {
    try {
      const resp = await fetchData(`model/${nameOfModel}`);
      const body = await resp.json();

      if (body.model.length > 0) {
        const myModel = body.model[0];
        dispatch({
          type: types.modelData,
          payload: myModel,
        });

        const createUploadProduct = {
          id: myModel._id,
          name: myModel.nameModel,
          price: myModel.priceModel,
          listColors: [
            {
              id: myModel.arrayColors[0]._id,
              name: myModel.arrayColors[0].nameColor,
              image: myModel.arrayColors[0].imageColor,
            },
          ],
        };

        dispatch({
          type: types.uploadProduct,
          payload: createUploadProduct,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const resetModelData = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: types.modelResetData,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
