
import { getAllDiscounts } from 'helpers/getAllDiscounts';
import '@testing-library/jest-dom';

describe('Pruebas en getAllDiscounts', () => {

	test('debe de traer todos los descuentos', async () => {

		const discounts = await getAllDiscounts();

		expect( discounts?.ok ).toBe( true );
		expect( typeof discounts?.allListDiscounts ).toEqual( 'object' );
		expect( discounts?.allListDiscounts?.length ).toBe( 5 );

	});

});
