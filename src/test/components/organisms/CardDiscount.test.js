
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';

import { CardDiscount } from 'components/organisms/CardDiscount';
import { discounts } from 'test/data/discounts';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import SecondaryButton from 'components/atoms/SecondaryButton';

const middlewares = [ thunk ];
const mockStore = configureStore( middlewares );

describe('Pruebas en <CardDiscount />', () => {

	const initState = {};
	const store = mockStore( initState );
	const initialIndex = 1;

	const wrapper = mount(
		<Provider store={ store }>
			<MemoryRouter>
				<CardDiscount discount={ discounts[initialIndex] }/>
			</MemoryRouter>
		</Provider>
	);

	test('debe de existir el componente LazyLoadImage', () => {

		expect( wrapper.find(LazyLoadImage).prop('alt') ).toBe( 'imageCardDiscount' );
		expect( wrapper.find(LazyLoadImage).prop('effect') ).toBe( 'blur' );

	});

	test('debe de mostrar el botón con la ruta correcta', () => {

		expect( wrapper.find(SecondaryButton).prop('title') ).toBe( 'Conoce más' );
		expect( wrapper.find(SecondaryButton).prop('urlTo') ).toBe( `/discounts/${discounts[initialIndex]?.nameDiscount}` );

	});

	test('debe de mostrar los textos correctamente', () => {

		expect( wrapper.find('h5').at(0).text().trim() ).toEqual( `${ discounts[initialIndex]?.percentage } %` );
		expect( wrapper.find('h3').text().trim() ).toEqual( discounts[initialIndex]?.nameDiscount );
		expect( wrapper.find('h4').at(0).text().trim() ).toEqual( discounts[initialIndex]?.descriptionDiscount );

	});

});
