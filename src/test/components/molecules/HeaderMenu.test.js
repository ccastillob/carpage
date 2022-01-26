
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import HeaderMenu from 'components/molecules/HeaderMenu';

const middlewares = [ thunk ];
const mockStore = configureStore( middlewares );

describe('Pruebas en <HeaderMenu />', () => {

	const initState = {};
	const store = mockStore( initState );

	test('debe de mostrarse correctamente la ruta de inicio', () => {

		const wrapper = mount(
			<Provider store={ store }>
				<MemoryRouter>
					<HeaderMenu status='home' />
				</MemoryRouter>
			</Provider>
		)

		expect( wrapper.find('a').at(1).find('.active').exists() ).toBe( true );

	});

	test('debe de mostrarse correctamente la ruta de modelo', () => {

		const wrapper = mount(
			<Provider store={ store }>
				<MemoryRouter>
					<HeaderMenu status='model' />
				</MemoryRouter>
			</Provider>
		)

		expect( wrapper.find('a').at(2).find('.active').exists() ).toBe( true );

	});

	test('debe de mostrarse correctamente la ruta de mantenimiento', () => {

		const wrapper = mount(
			<Provider store={ store }>
				<MemoryRouter>
					<HeaderMenu status='maintenance' />
				</MemoryRouter>
			</Provider>
		)

		expect( wrapper.find('a').at(3).find('.active').exists() ).toBe( true );

	});

	test('debe de mostrarse correctamente la ruta de descuento', () => {

		const wrapper = mount(
			<Provider store={ store }>
				<MemoryRouter>
					<HeaderMenu status='discount' />
				</MemoryRouter>
			</Provider>
		)

		expect( wrapper.find('a').at(4).find('.active').exists() ).toBe( true );

	});

	test('debe de mostrarse correctamente la ruta de eventos', () => {

		const wrapper = mount(
			<Provider store={ store }>
				<MemoryRouter>
					<HeaderMenu status='event' />
				</MemoryRouter>
			</Provider>
		)

		expect( wrapper.find('a').at(5).find('.active').exists() ).toBe( true );

	});

	test('debe de mostrarse correctamente la ruta de carrito de compras', () => {

		const wrapper = mount(
			<Provider store={ store }>
				<MemoryRouter>
					<HeaderMenu status='shop' />
				</MemoryRouter>
			</Provider>
		)

		expect( wrapper.find('a').at(6).find('.active').exists() ).toBe( true );

	});

});
