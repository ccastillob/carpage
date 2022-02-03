
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

import HomePage from 'components/pages/HomePage';
import PrimaryButton from 'components/atoms/PrimaryButton';

const middlewares = [ thunk ];
const mockStore = configureStore( middlewares );

describe('Pruebas en <HomePage />', () => {

	const initState = {};
	const store = mockStore( initState );

	const wrapper = mount(
		<Provider store={ store }>
			<MemoryRouter>
				<HomePage />
			</MemoryRouter>
		</Provider>
	);

	test('debe de mostrarse los títulos correctamente', () => {

		expect( wrapper.find('h1').at(0).text().trim() ).toEqual('Nuevo Audi Etron GT Quattro');
		expect( wrapper.find('h1').at(1).text().trim() ).toEqual('Modelos');
		expect( wrapper.find('h1').at(2).text().trim() ).toEqual('Mantenimiento');
		expect( wrapper.find('h1').at(3).text().trim() ).toEqual('Descuentos de temporada');
		expect( wrapper.find('h1').at(4).text().trim() ).toEqual('Eventos');

	});

	test('debe de mostrarse los textos de los botones correctamente', () => {

		expect( wrapper.find(PrimaryButton).at(0).text().trim() ).toEqual('Conócelo aquí');
		expect( wrapper.find(PrimaryButton).at(1).text().trim() ).toEqual('Echa un vistazo');
		expect( wrapper.find(PrimaryButton).at(2).text().trim() ).toEqual('Conoce más');
		expect( wrapper.find(PrimaryButton).at(3).text().trim() ).toEqual('Mira los descuentos');
		expect( wrapper.find(PrimaryButton).at(4).text().trim() ).toEqual('Si, vamos !');

	});

	test('debe de mostrarse los textos de los enlaces correctamente', () => {

		expect( wrapper.find(PrimaryButton).at(0).prop('urlTo') ).toEqual('/models/audi-e-tron-gt-quattro');
		expect( wrapper.find(PrimaryButton).at(1).prop('urlTo') ).toEqual('/models');
		expect( wrapper.find(PrimaryButton).at(2).prop('urlTo') ).toEqual('/maintenances');
		expect( wrapper.find(PrimaryButton).at(3).prop('urlTo') ).toEqual('/discounts');
		expect( wrapper.find(PrimaryButton).at(4).prop('urlTo') ).toEqual('/events/');

	});


});
