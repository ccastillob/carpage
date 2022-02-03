
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';

import { toast } from 'react-toastify';
import ModelDetails from 'components/pages/ModelDetails';
import { models } from 'test/data/models';

const middlewares = [ thunk ];
const mockStore = configureStore( middlewares );

describe('Pruebas en <ModelDetails />', () => {

	beforeEach( () => {
		Storage.prototype.setItem = jest.fn();
		toast.success = jest.fn();
		toast.error = jest.fn();
	});

	const initialIndex = 0;
	const initState = {
		dataModel: models[initialIndex]
	};
	const store = mockStore( initState );
	const match = {
		params: {
			nameModel: models[initialIndex]?.nameModel
		}
	}

	const wrapper = mount(
		<Provider store={ store }>
			<MemoryRouter>
				<ModelDetails match={ match } />
			</MemoryRouter>
		</Provider>
	)

	test('debe de cambiar el color y la imagen al hacer click en la paleta de color', () => {

		wrapper.find('.colors__item').at(1).simulate('click');

		expect( wrapper.find('.colors__item').at(1).html().includes('active') ).toBe(true);
		expect( wrapper.find('.text__name-colors').text().trim() ).toEqual(models[initialIndex]?.arrayColors[1].nameColor);
		expect( wrapper.find('img').at(0).prop('src') ).toEqual(models[initialIndex]?.arrayColors[1].imageColor);

	});

	test('debe de cambiar el contenido del localStorage al presionar el botón Añadelo al carrito', () => {

		wrapper.find('a').at(7).simulate('click', { preventDefault(){} });

		expect( localStorage.setItem ).toHaveBeenCalledTimes(1);
		expect( localStorage.setItem ).toHaveBeenCalledWith( "cart", expect.any(String));
		expect( toast.success ).toHaveBeenCalledWith('Añadiste un producto', expect.any(Object));

	});

});
