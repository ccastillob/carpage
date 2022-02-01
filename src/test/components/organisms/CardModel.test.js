
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';

import { CardModel } from 'components/organisms/CardModel';
import { models } from 'test/data/models';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import SecondaryButton from 'components/atoms/SecondaryButton';

const middlewares = [ thunk ];
const mockStore = configureStore( middlewares );

describe('Pruebas en <CardModel />', () => {

	const initState = {};
	const store = mockStore( initState );
	const initialIndex = 1;

	const wrapper = mount(
		<Provider store={ store }>
			<MemoryRouter>
				<CardModel model={ models[initialIndex] }/>
			</MemoryRouter>
		</Provider>
	);

	test('debe de existir el componente LazyLoadImage', () => {

		expect( wrapper.find(LazyLoadImage).prop('alt') ).toBe( models[initialIndex]?.nameModel );
		expect( wrapper.find(LazyLoadImage).prop('effect') ).toBe( 'blur' );

	});

	test('debe de mostrar el botón con la ruta correcta', () => {

		expect( wrapper.find(SecondaryButton).prop('title') ).toBe( 'Conoce más' );
		expect( wrapper.find(SecondaryButton).prop('urlTo') ).toBe( `/models/${models[initialIndex]?.nameModel}` );

	});

	test('debe de mostrar los textos correctamente', () => {

		expect( wrapper.find('h3').text().trim() ).toEqual( models[initialIndex]?.nameModel );
		expect( wrapper.find('h4').at(0).text().trim() ).toEqual( models[initialIndex]?.descriptionModel );
		expect( wrapper.find('h4').at(1).text().trim() ).toEqual( `$ ${models[initialIndex]?.priceModel.toFixed(2)}` );

	});

});
