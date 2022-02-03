
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';

import DiscountDetails from 'components/pages/DiscountDetails';
import { discounts } from 'test/data/discounts';
import { toast } from 'react-toastify';

const middlewares = [ thunk ];
const mockStore = configureStore( middlewares );

describe('Pruebas en <DiscountDetails />', () => {

	beforeEach( () => {
		Storage.prototype.setItem = jest.fn();
		toast.success = jest.fn();
		toast.error = jest.fn();
	});

	const initialIndex = 1;
	const initState = {
		dataDiscount: discounts[initialIndex]
	};
	const store = mockStore( initState );
	const match = {
		params: {
			nameDiscount: discounts[initialIndex]?.nameDiscount
		}
	}

	const wrapper = mount(
		<Provider store={ store }>
			<MemoryRouter>
				<DiscountDetails match={ match } />
			</MemoryRouter>
		</Provider>
	)

	test('debe de mostrar el descuento en la imagen y el texto', () => {

		expect( wrapper.find('h2').at(0).text().trim() ).toEqual( `${discounts[initialIndex]?.percentage} %` );
		expect( wrapper.find('h2').at(0).prop('className').includes('discountdetails-box__percentage') ).toBe(true);
		expect( wrapper.find('h4').at(5).text().trim() ).toEqual( `$ ${discounts[initialIndex]?.priceDiscount.toFixed(2)}` );
		expect( wrapper.find('h4').at(5).prop('className').includes('text__price-before') ).toBe(true);

	});

	test('debe de cambiar el color y la imagen al hacer click en la paleta de color', () => {

		wrapper.find('.colors__item').at(1).simulate('click');

		expect( wrapper.find('.colors__item').at(1).html().includes('active') ).toBe(true);
		expect( wrapper.find('.text__name-colors').text().trim() ).toEqual(discounts[initialIndex]?.arrayColors[1].nameColor);
		expect( wrapper.find('img').at(0).prop('src') ).toEqual(discounts[initialIndex]?.arrayColors[1].imageColor);

	});

	test('debe de cambiar el contenido del localStorage al presionar el botón Añadelo al carrito', () => {

		wrapper.find('a').at(7).simulate('click', { preventDefault(){} });

		expect( localStorage.setItem ).toHaveBeenCalledTimes(1);
		expect( localStorage.setItem ).toHaveBeenCalledWith( "cart", expect.any(String));
		expect( toast.success ).toHaveBeenCalledWith('Añadiste un producto', expect.any(Object));

	});

});

