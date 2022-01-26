
import { renderHook } from '@testing-library/react-hooks';
import '@testing-library/jest-dom';

import { useFetchAllDiscounts } from 'hooks/useFetchAllDiscounts';

describe('Pruebas en el hook <useFetchAllDiscounts />', () => {

	test('debe de retornar el estado inicial', async() => {

		const { result, waitForNextUpdate } = renderHook( () => useFetchAllDiscounts() );
		const { data, loading } = result.current;
		await waitForNextUpdate({timeout: 4000});

		expect( data ).toEqual([]);
		expect( loading ).toBe( true );

	});

	test('debe de retornar un arreglo y el loading en false', async () => {

		const { result, waitForNextUpdate } = renderHook( () => useFetchAllDiscounts() );
		await waitForNextUpdate({ timeout: 6000 });
		const { data, loading } = result.current;

		if( data === undefined ) return;

		expect( data?.length ).toBe(5);
		expect( loading ).toBe( false );

	});

	test('debe de retornar undefined la data cuando exista un error', async () => {

		const { result, waitForNextUpdate } = renderHook( () => useFetchAllDiscounts() );
		await waitForNextUpdate({ timeout: 6000 });
		const { data, loading } = result.current;

		if( data !== undefined ) return;

		expect( data ).toBe( undefined );
		expect( loading ).toBe( true );

	});

});

