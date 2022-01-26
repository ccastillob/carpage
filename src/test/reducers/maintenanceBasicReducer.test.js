
import '@testing-library/jest-dom';

import { maintenanceBasicReducer } from 'reducers/maintenanceBasicReducer';
import { types } from 'types/types';

const initialState = {};

describe('Pruebas en maintenanceBasicReducer.js', () => {

	test('debe de mostrar la data del mantenimiento básico', () => {

		const action = {
			type: types.maintenanceBasicData,
			payload: {
				nameMaintenanceBasic: 'Básico',
				listMaintenancesBasic: [{
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
				}],
			}
		};

		const state = maintenanceBasicReducer( initialState, action );

		expect( state ).toEqual({
			nameMaintenanceBasic: 'Básico',
			listMaintenancesBasic: [{
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
			}],
		})

	});

	test('no debe de hacer cambios en el state', () => {

		const action = {
			type: 'asdaqrbasic'
		};

		const state = maintenanceBasicReducer( initialState, action );

		expect( state ).toEqual({});

	});

});
