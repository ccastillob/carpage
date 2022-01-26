
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import FooterMenu from 'components/molecules/FooterMenu';

describe('Pruebas en <FooterMenu />', () => {

	test('debe de mostrarse correctamente la ruta al modelo', () => {

		const wrapper = mount(
			<MemoryRouter >
				<FooterMenu status='model' />
			</MemoryRouter>
		)

		expect( wrapper.find('a').at(0).find('.active').exists() ).toBe( true );

	});

	test('debe de mostrarse correctamente la ruta al mantenimiento', () => {

		const wrapper = mount(
			<MemoryRouter >
				<FooterMenu status='maintenance' />
			</MemoryRouter>
		)

		expect( wrapper.find('a').at(1).find('.active').exists() ).toBe( true );

	});

	test('debe de mostrarse correctamente la ruta al inicio', () => {

		const wrapper = mount(
			<MemoryRouter >
				<FooterMenu status='home' />
			</MemoryRouter>
		)

		expect( wrapper.find('a').at(2).find('.active').exists() ).toBe( true );

	});

	test('debe de mostrarse correctamente la ruta a los descuentos', () => {

		const wrapper = mount(
			<MemoryRouter >
				<FooterMenu status='discount' />
			</MemoryRouter>
		)

		expect( wrapper.find('a').at(3).find('.active').exists() ).toBe( true );

	});

	test('debe de mostrarse correctamente la ruta a los eventos', () => {

		const wrapper = mount(
			<MemoryRouter >
				<FooterMenu status='event' />
			</MemoryRouter>
		)

		expect( wrapper.find('a').at(4).find('.active').exists() ).toBe( true );

	});

});
