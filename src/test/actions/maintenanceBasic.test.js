
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';

import { startMaintenanceBasicData } from 'actions/maintenanceBasic';
import { types } from 'types/types';

const middlewares = [ thunk ];
const mockStore = configureStore( middlewares );

const initState = {};
let store = mockStore( initState );

jest.setTimeout(6000);

describe('Pruebas en las acciones de mantenimiento básico', () => {

	beforeEach(()=> {
		store = mockStore( initState );
		jest.clearAllMocks();
	});

	test('startMaintenanceBasicData debe mostrarme la data de mantenimiento básico', async() => {

		await store.dispatch( startMaintenanceBasicData('basic') );

		const actions = store.getActions();

		expect( actions[0] ).toEqual({
			type: types.maintenanceBasicData,
			payload: {
				__v: expect.any(Number),
				_id: expect.any(String),
				nameMaintenance: expect.any(String),
				arrayDetails: expect.any(Array),
			}
		});

	});

	test('startMaintenanceBasicData no debe mostrar la data de mantenimiento básico', async () => {

		await store.dispatch( startMaintenanceBasicData('cualquiercosa') );

		const actions = store.getActions();

		expect( actions[0] ).toEqual(undefined);

	});

});
