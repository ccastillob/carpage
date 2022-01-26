
import React from 'react';
import { mount } from 'enzyme';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

import SecondaryButton from 'components/atoms/SecondaryButton';
import SunIcon from 'components/icons/static/SunIcon';

describe('Pruebas en componente <SecondaryButton />', () => {

	test('debe de ser un botón secundario', () => {

		const wrapper = mount(
			<MemoryRouter>
				<SecondaryButton />
			</MemoryRouter>
		);

		expect( wrapper.find('.button-secondary').exists() ).toBe( true );

	});

	test('debe de devolver el titulo del botón', () => {

		const wrapper = mount(
			<MemoryRouter>
				<SecondaryButton icon={<SunIcon />} title='Secondary Button' />
			</MemoryRouter>
		);

		expect( wrapper.find('a').text().trim() ).toBe( 'Secondary Button' );

	});

	test('no debe de devolver un titulo sino se le pasa', () => {

		const wrapper = mount(
			<MemoryRouter>
				<SecondaryButton icon={<SunIcon />} />
			</MemoryRouter>
		);

		expect( wrapper.find('a').text().trim() ).toBe( '' );

	});

});
