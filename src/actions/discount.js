
import { types } from '../types/types';
import { fetchData } from '../helpers/fetch';

export const startDiscountData = (nameOfDiscount) => {
	return async( dispatch ) => {

		try {
			const resp = await fetchData(`discount/${nameOfDiscount}`);
			const body = await resp.json();

			if( body.discount.length > 0 ) {
				const myDiscount = body.discount[0];
				dispatch( discountData(myDiscount) );
			}

		} catch (error) {
			console.log(error)
		}

	}
}

export const resetDiscountData = () => {

	return async( dispatch ) => {

		try {

			dispatch( resetData() )

		} catch (error) {
			console.log(error)
		}

	}

}

const resetData = () => ({
	type: types.discountResetData
});

const discountData = (data) => ({
	type: types.discountData,
	payload: data
})
