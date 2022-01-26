
import React from 'react';
import { mount } from 'enzyme';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

import PrimaryButton from 'components/atoms/PrimaryButton';

describe('Pruebas en componente <PrimaryButton />', () => {

	test('debe de ser un botón primario', () => {

		const wrapper = mount(
			<MemoryRouter>
				<PrimaryButton />
			</MemoryRouter>
		);

		expect( wrapper.find('.button-primary').exists() ).toBe( true );

	});

	test('debe de devolver el titulo del botón', () => {

		const wrapper = mount(
			<MemoryRouter>
				<PrimaryButton title='Primary Button' />
			</MemoryRouter>
		);

		expect( wrapper.find('a').text().trim() ).toBe( 'Primary Button' );

	});

	test('no debe de devolver un titulo sino se le pasa', () => {

		const wrapper = mount(
			<MemoryRouter>
				<PrimaryButton />
			</MemoryRouter>
		);

		expect( wrapper.find('a').text().trim() ).toBe( '' );

	});

});
