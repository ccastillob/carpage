
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';

import Shop from 'components/pages/Shop';
import SecondaryButton from 'components/atoms/SecondaryButton';

const middlewares = [ thunk ];
const mockStore = configureStore( middlewares );

describe('Pruebas en <Shop />', () => {

	const initState = {};
	const store = mockStore( initState );

	const wrapper = mount(
		<Provider store={ store }>
			<MemoryRouter>
				<Shop />
			</MemoryRouter>
		</Provider>
	)

	test('debe de mostrar el título y los enlaces correctamente', () => {

		expect( wrapper.find('h1').text().trim() ).toEqual('Tu carrito está vacio');

		expect( wrapper.find('a').at(7).text().trim() ).toEqual('Modelos');
		expect( wrapper.find(SecondaryButton).at(0).prop('urlTo') ).toEqual('/models');

		expect( wrapper.find('a').at(8).text().trim() ).toEqual('Mantenimiento');
		expect( wrapper.find(SecondaryButton).at(1).prop('urlTo') ).toEqual('/maintenances');

		expect( wrapper.find('a').at(9).text().trim() ).toEqual('Descuentos');
		expect( wrapper.find(SecondaryButton).at(2).prop('urlTo') ).toEqual('/discounts');

	});

});
