
import { getAllModels } from 'helpers/getAllModels';
import '@testing-library/jest-dom';

describe('Pruebas en getAllModels', () => {

	test('debe de traer todos los modelos', async () => {

		const models = await getAllModels();

		expect( models?.ok ).toBe( true );
		expect( typeof models?.allListModels ).toEqual( 'object' );
		expect( models?.allListModels?.length ).toBe( 6 );

	});

});
