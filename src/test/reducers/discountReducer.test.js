
import '@testing-library/jest-dom';

import { discountReducer } from 'reducers/discountReducer';
import { types } from 'types/types';

const initState = {}

describe('Pruebas en discountReducer.js', () => {

	test('debe de mostrar la data de los descuentos', () => {

		const action = {
			type: types.discountData,
			payload: {
				nameDiscount: 'Audi G07',
				price: 12900
			}
		};

		const state = discountReducer( initState, action );

		expect( state ).toEqual({
			nameDiscount: 'Audi G07',
			price: 12900
		});

	});

	test('debe de reiniciar el state de los descuentos', () => {

		const initState = {
			nameDiscount: 'Audi S4',
			price: 29310
		};

		const action = {
			type: types.discountResetData,
		};

		const state = discountReducer( initState, action );

		expect( state ).toEqual( {} );

	});

	test('no debe de hacer cambios en el state', () => {

		const initState = {
			nameDiscount: 'Audi GTRX',
			price: 15900
		}

		const action = {
			type: 'asasdasd',
		};

		const state = discountReducer( initState, action );

		expect( state ).toEqual( initState );

	});

});
