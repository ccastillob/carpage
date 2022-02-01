
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';

import { TechnicalSpecifications } from 'components/organisms/TechnicalSpecifications';
import { models } from 'test/data/models';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const middlewares = [ thunk ];
const mockStore = configureStore( middlewares );

describe('Pruebas en <TechnicalSpecifications />', () => {

	const initState = {};
	const store = mockStore( initState );
	const initialIndex = 1;

	const wrapper = mount(
		<Provider store={ store }>
			<MemoryRouter>
				<TechnicalSpecifications data={ models[initialIndex] }/>
			</MemoryRouter>
		</Provider>
	);

	test('debe mostrar correctamente el subtitulo', () => {

		expect( wrapper.find('h2').text().trim() ).toEqual('Especificaciones técnicas');

	});

	test('debe de existir 3 componentes LazyLoadImage con su respectivo alt', () => {

		expect( wrapper.find(LazyLoadImage).at(0).prop('alt') ).toBe('potency');
		expect( wrapper.find(LazyLoadImage).at(1).prop('alt') ).toBe('acceleration');
		expect( wrapper.find(LazyLoadImage).at(2).prop('alt') ).toBe('velocity');

	});

	test('debe de mostrar la información correctamente', () => {

		expect( wrapper.find('h4').at(0).text().trim() ).toEqual('Potencia máx');
		expect( wrapper.find('h4').at(1).text().trim() ).toEqual( `${models[initialIndex].potency} HP` );

		expect( wrapper.find('h4').at(2).text().trim() ).toEqual('Aceleración(0 - 100 Km/h)');
		expect( wrapper.find('h4').at(3).text().trim() ).toEqual( `${models[initialIndex].acceleration} s` );

		expect( wrapper.find('h4').at(4).text().trim() ).toEqual('Velocidad máx');
		expect( wrapper.find('h4').at(5).text().trim() ).toEqual( `${models[initialIndex].velocity} Km/h` );

	});

});
