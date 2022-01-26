
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';

import { startMaintenanceAdvancedData } from 'actions/maintenanceAdvanced';
import { types } from 'types/types';

const middlewares = [ thunk ];
const mockStore = configureStore( middlewares );

const initState = {};
let store = mockStore( initState );

describe('Pruebas en las acciones de mantenimiento avanzado', () => {

	beforeEach(()=> {
		store = mockStore( initState );
		jest.clearAllMocks();
	});

	test('startMaintenanceAdvancedData debe mostrarme la data de mantenimiento avanzado', async() => {

		await store.dispatch( startMaintenanceAdvancedData('advanced') );

		const actions = store.getActions();

		expect( actions[0] ).toEqual({
			type: types.maintenanceAdvancedData,
			payload: {
				__v: expect.any(Number),
				_id: expect.any(String),
				nameMaintenance: expect.any(String),
				arrayDetails: expect.any(Array),
			}
		});

	});

	test('startMaintenanceAdvancedData no debe mostrar la data de mantenimiento avanzado', async () => {

		await store.dispatch( startMaintenanceAdvancedData('cualquiercosa') );

		const actions = store.getActions();

		expect( actions[0] ).toEqual(undefined);

	});

});
