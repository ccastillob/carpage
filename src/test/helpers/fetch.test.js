
import { fetchData } from 'helpers/fetch';

describe('Pruebas en helper Fetch', () => {

	jest.setTimeout(5000);

	test('fetchData debe de funcionar', async() => {

		const resp = await fetchData('model/all');

		expect( resp instanceof Response ).toBe(true);

		const body = await resp.json();
		expect( body.ok ).toBe( true );

	});

});

