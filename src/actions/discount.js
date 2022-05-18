import { types } from '../types/types';
import { fetchData } from '../helpers/fetch';

export const startDiscountData = (nameOfDiscount) => {
  return async (dispatch) => {
    try {
      const resp = await fetchData(`discount/${nameOfDiscount}`);
      const body = await resp.json();

      if (body.discount.length > 0) {
        const myDiscount = body.discount[0];
        dispatch({
          type: types.discountData,
          payload: myDiscount,
        });

        const createUploadProduct = {
          id: myDiscount._id,
          name: myDiscount.nameDiscount,
          price: myDiscount.priceDiscount,
          percentage: myDiscount.percentage,
          listColors: [
            {
              id: myDiscount.arrayColors[0]._id,
              name: myDiscount.arrayColors[0].nameColor,
              image: myDiscount.arrayColors[0].imageColor,
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

export const resetDiscountData = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: types.discountResetData,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
