
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';

import { resetModelData, startModelData } from 'actions/model';
import { types } from 'types/types';

const middlewares = [ thunk ];
const mockStore = configureStore( middlewares );

const initState = {};
let store = mockStore( initState );

describe('Pruebas en las acciones Model', () => {

	beforeEach(()=> {
		store = mockStore( initState );
		delete window.location;
		window.location = { assign: jest.fn() };
		jest.clearAllMocks();
	});

	test('startModelData debe estar correcto', async() => {

		await store.dispatch( startModelData('Audi A3 Sportback') );

		const actions = store.getActions();

		expect( actions[0] ).toEqual({
			type: types.modelData,
			payload: {
				_id: expect.any(String),
				nameModel: expect.any(String),
				descriptionModel: expect.any(String),
				priceModel: expect.any(Number),
				potency: expect.any(Number),
				acceleration: expect.any(Number),
				velocity: expect.any(Number),
				arrayColors: expect.any(Array),
				__v: expect.any(Number),
			}
		});

	});

	test('startModelData debe de estar incorrecto', async() => {

		await store.dispatch( startModelData('cualquier cosa') );

		const actions = store.getActions();

		expect( actions[0] ).toEqual(undefined);

	});

	test('startModelData debe de reiniciar los valores', async() => {

		await store.dispatch( resetModelData() );

		const actions = store.getActions();

		expect( actions[0] ).toEqual({
			type: types.modelResetData
		})

	});

});
