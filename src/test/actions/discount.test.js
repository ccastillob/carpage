
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';

import { resetDiscountData, startDiscountData } from 'actions/discount';
import { types } from 'types/types';

const middlewares = [ thunk ];
const mockStore = configureStore( middlewares );

const initState = {};
let store = mockStore( initState );

describe('Pruebas en las acciones Descuento', () => {

	beforeEach(()=> {
		store = mockStore( initState );
		delete window.location;
		window.location = { assign: jest.fn() };
		jest.clearAllMocks();
	});

	test('startDiscountData debe estar correcto', async() => {

		await store.dispatch( startDiscountData('Audi Q3 Sportback') );

		const actions = store.getActions();

		expect( actions[0] ).toEqual({
			type: types.discountData,
			payload: {
				_id: expect.any(String),
				nameDiscount: expect.any(String),
				descriptionDiscount: expect.any(String),
				priceDiscount: expect.any(Number),
				potency: expect.any(Number),
				acceleration: expect.any(Number),
				velocity: expect.any(Number),
				arrayColors: expect.any(Array),
				percentage: expect.any(Number),
				__v: expect.any(Number),
			}
		});

	});

	test('startDiscountData debe de estar incorrecto', async() => {

		await store.dispatch( startDiscountData('cualquier cosa') );

		const actions = store.getActions();

		expect( actions[0] ).toEqual(undefined);

	});

	test('startDiscountData debe de reiniciar los valores', async() => {

		await store.dispatch( resetDiscountData() );

		const actions = store.getActions();

		expect( actions[0] ).toEqual({
			type: types.discountResetData
		})

	});

});
