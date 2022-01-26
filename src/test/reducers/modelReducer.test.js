
import '@testing-library/jest-dom';

import { modelReducer } from 'reducers/modelReducer';
import { types } from 'types/types';

const initialState = {};

describe('Pruebas en modelReducer.js', () => {

	test('debe de mostrar la data de los modelos', () => {

		const action = {
			type: types.modelData,
			payload: {
				nameModel: 'Audi G07',
				price: 14800
			}
		};

		const state = modelReducer( initialState, action );

		expect( state ).toEqual({
			nameModel: 'Audi G07',
			price: 14800
		})

	});

	test('debe de reiniciar el state de los modelos', () => {

		const initState = {
			nameModel: 'Audi S4',
			price: 32450
		};

		const action = {
			type: types.modelResetData,
		};

		const state = modelReducer( initState, action );

		expect( state ).toEqual( {} );

	});

	test('no debe de hacer cambios en el state', () => {

		const initState = {
			nameModel: 'Audi GTRX',
			price: 26180
		}

		const action = {
			type: 'asasdasd',
		};

		const state = modelReducer( initState, action );

		expect( state ).toEqual( initState );

	});


});
