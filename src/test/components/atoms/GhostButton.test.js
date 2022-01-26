
import React from 'react';
import { mount } from 'enzyme';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

import GhostButton from 'components/atoms/GhostButton';
import SunIcon from 'components/icons/static/SunIcon';

describe('Pruebas en componente <GhostButton />', () => {

	test('debe de ser un botón fantasma', () => {

		const wrapper = mount(
			<MemoryRouter>
				<GhostButton />
			</MemoryRouter>
		);

		expect( wrapper.find('.button-ghost').exists() ).toBe( true );

	});

	test('debe de devolver el titulo del botón', () => {

		const wrapper = mount(
			<MemoryRouter>
				<GhostButton icon={<SunIcon />} title='Ghost Button' />
			</MemoryRouter>
		);

		expect( wrapper.find('a').text().trim() ).toBe( 'Ghost Button' );

	});

	test('no debe de devolver un titulo sino se le pasa', () => {

		const wrapper = mount(
			<MemoryRouter>
				<GhostButton icon={<SunIcon />} />
			</MemoryRouter>
		);

		expect( wrapper.find('a').text().trim() ).toBe( '' );

	});

});
