
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';
import { toast } from 'react-toastify';

import { SectionMaintenanceAdvanced } from 'components/organisms/SectionMaintenanceAdvanced';
import { maintenanceDetailsAdvanced } from 'test/data/sectionMaintenanceAdvanced';

const middlewares = [ thunk ];
const mockStore = configureStore( middlewares );

describe('Pruebas en <SectionMaintenanceAdvanced />', () => {

	beforeEach(() => {
		Storage.prototype.setItem = jest.fn();
		toast.success = jest.fn();
		toast.error = jest.fn();
		jest.clearAllMocks();
	})

	const initState = {
		dataMaintenanceAdvanced: maintenanceDetailsAdvanced
	}

	const store = mockStore( initState );

	const showButtons = {
		shopAdvanced: false,
		shopBasic: false,
	};
	const setShowButtons = jest.fn();
	const mainMaintenanceCart = null;
	const setMainMaintenanceCart = jest.fn();

	const wrapper = mount(
		<Provider store={ store }>
			<MemoryRouter>
				<SectionMaintenanceAdvanced
					showButtons={ showButtons }
					setShowButtons={ setShowButtons }
					mainMaintenanceCart={ mainMaintenanceCart }
					setMainMaintenanceCart={ setMainMaintenanceCart }
				/>
			</MemoryRouter>
		</Provider>
	);

	test('debe de mostrarse correctamente', () => {

		expect( wrapper.find('h1').text().trim() ).toEqual('Mantenimiento Avanzado')
		expect( wrapper.find('h4').at(4).text().trim() ).toEqual('Parabrisas');
		expect( wrapper.find('h4').at(5).text().trim() ).toEqual('Motor');
		expect( localStorage.setItem ).toHaveBeenCalledTimes(0);

	});

	test('debe de mostrarse el contenido del localStorage al presionar el botón Personaliza', () => {

		wrapper.find('a').at(0).simulate('click');

		expect( localStorage.setItem ).toHaveBeenCalledWith("statusDetails", null);

	});

	test('debe de cambiar el contenido del setShowButtons y localStorage al presionar el botón Añádelo', () => {

		wrapper.find('a').at(1).simulate('click', { preventDefault(){} });

		expect( setShowButtons ).toHaveBeenCalledWith({shopAdvanced: true, shopBasic: false})
		expect( localStorage.setItem ).toHaveBeenCalledTimes(1);
		expect( localStorage.setItem ).toHaveBeenCalledWith( "cart", expect.any(String) );
		expect( toast.success ).toHaveBeenCalledWith('Añadiste un producto', expect.any(Object));

	});

	test('debe de cambiar el contenido del setShowButtons y localStorage al presionar el botón Quitalo del carrito', () => {

		const showButtons = {
			shopAdvanced: true,
			shopBasic: false,
		};
		const setShowButtons = jest.fn();
		const mainMaintenanceCart = [{
			nameItem: "Mantenimiento avanzado",
			tagItem: "Full",
			stateItem: true,
			priceItem: 1000.00,
			detailItem: [],
		}];
		const setMainMaintenanceCart = jest.fn();

		const wrapper = mount(
			<Provider store={ store }>
				<MemoryRouter>
					<SectionMaintenanceAdvanced
						showButtons={ showButtons }
						setShowButtons={ setShowButtons }
						mainMaintenanceCart={ mainMaintenanceCart }
						setMainMaintenanceCart={ setMainMaintenanceCart }
					/>
				</MemoryRouter>
			</Provider>
		);

		wrapper.find('a').at(0).simulate('click', { preventDefault(){} });

		expect( setShowButtons ).toHaveBeenCalledWith({shopAdvanced: false, shopBasic: false})
		expect( localStorage.setItem ).toHaveBeenCalledTimes(1);
		expect( localStorage.setItem ).toHaveBeenCalledWith( "cart", JSON.stringify([]) );
		expect( toast.error ).toHaveBeenCalledWith('Quitaste un producto', expect.any(Object));

	});

});
