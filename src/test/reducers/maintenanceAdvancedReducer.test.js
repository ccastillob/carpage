
import '@testing-library/jest-dom';

import { maintenanceAdvancedReducer } from 'reducers/maintenanceAdvancedReducer';
import { types } from 'types/types';

const initialState = {}

describe('Pruebas en maintenanceAdvancedReducer.js', () => {

	test('debe de mostrar la data del mantenimiento avanzado', () => {

		const action = {
			type: types.maintenanceAdvancedData,
			payload: {
				nameMaintenanceAdvanced: 'Avanzado',
				listMaintenancesAdvanced: [{
					name: 'Neumáticos',
					price: 1400
				}, {
					name: 'Asientos',
					price: 2830
				}, {
					name: 'Volante',
					price: 2270
				}, {
					name: 'Frenos',
					price: 3790
				}, {
					name: 'Parabrisas',
					price: 1565
				}, {
					name: 'Motor',
					price: 9540
				}],
			}
		};

		const state = maintenanceAdvancedReducer( initialState, action );

		expect( state ).toEqual({
			nameMaintenanceAdvanced: 'Avanzado',
			listMaintenancesAdvanced: [{
				name: 'Neumáticos',
				price: 1400
			}, {
				name: 'Asientos',
				price: 2830
			}, {
				name: 'Volante',
				price: 2270
			}, {
				name: 'Frenos',
				price: 3790
			}, {
				name: 'Parabrisas',
				price: 1565
			}, {
				name: 'Motor',
				price: 9540
			}],
		})

	});

	test('no debe de hacer cambios en el state', () => {

		const action = {
			type: 'asdaqradvanced'
		};

		const state = maintenanceAdvancedReducer( initialState, action );

		expect( state ).toEqual({});

	});

});
