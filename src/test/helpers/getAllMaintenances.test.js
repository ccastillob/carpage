
import { getAllMaintenances } from 'helpers/getAllMaintenances';
import '@testing-library/jest-dom';

describe('Pruebas en getAllMaintenances', () => {

	test('debe de traer todos los mantenimientos', async () => {

		const maintenances = await getAllMaintenances();

		expect( maintenances?.ok ).toBe( true );
		expect( typeof maintenances?.allListMaintenances ).toEqual( 'object' );
		expect( maintenances?.allListMaintenances?.length ).toBe( 2 );

	});

});
