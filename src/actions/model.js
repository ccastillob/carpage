
import { types } from '../types/types';
import { fetchData } from '../helpers/fetch';

export const startModelData = (nameOfModel) => {
	return async( dispatch ) => {

		try {
			const resp = await fetchData( `model/${nameOfModel}` );
			const body = await resp.json();

			if( body.model.length > 0 ) {
				const myModel = body.model[0];
				dispatch( modelData(myModel) )
			}

		} catch (error) {
			console.log(error)
		}

	}
}

export const resetModelData = () => {

	return async( dispatch ) => {

		try {

			dispatch( resetData() )

		} catch (error) {
			console.log(error)
		}

	}

}

const resetData = () => ({
	type: types.modelResetData
})

const modelData = (data) => ({
	type: types.modelData,
	payload: data
})