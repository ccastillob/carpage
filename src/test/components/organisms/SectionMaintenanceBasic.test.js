
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { SectionMaintenanceBasic } from 'components/organisms/SectionMaintenanceBasic';
import { maintenanceDetailsBasic } from 'test/data/sectionMaintenanceBasic';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Pruebas en <SectionMaintenanceBasic />', () => {

	beforeEach( () => {
		Storage.prototype.setItem = jest.fn();
		toast.success = jest.fn();
		toast.error = jest.fn();
		jest.clearAllMocks();
	});

	const initState = {
		dataMaintenanceBasic: maintenanceDetailsBasic
	};
	const { arrayDetails } = maintenanceDetailsBasic;

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
				<SectionMaintenanceBasic
					arrBasic={ arrayDetails }
					showButtons={ showButtons }
					setShowButtons={ setShowButtons }
					mainMaintenanceCart={ mainMaintenanceCart }
					setMainMaintenanceCart={ setMainMaintenanceCart }
				/>
			</MemoryRouter>
		</Provider>
	)

	test('debe de mostrarse correctamente', () => {

		expect( wrapper.find('h1').text().trim() ).toEqual('Mantenimiento Básico');
		expect( wrapper.find('h4').at(2).text().trim() ).toEqual('Volante');
		expect( wrapper.find('h4').at(3).text().trim() ).toEqual('Frenos');
		expect( localStorage.setItem ).toHaveBeenCalledTimes(0);
	});

	test('debe de mostrarse el contenido del localStorage al presionar el botón Personaliza', () => {

		wrapper.find('a').at(0).simulate('click');

		expect( localStorage.setItem ).toHaveBeenCalledWith('statusDetails', null);

	});

	test('debe de cambiar el contenido del setShowButtons y localStorage al presionar el botón Añádelo', () => {

		wrapper.find('a').at(1).simulate('click', { preventDefault(){} });

		expect( setShowButtons ).toHaveBeenCalledWith({shopAdvanced: false, shopBasic: true})
		expect( localStorage.setItem ).toHaveBeenCalledTimes(1);
		expect( localStorage.setItem ).toHaveBeenCalledWith( "cart", expect.any(String) );
		expect( toast.success ).toHaveBeenCalledWith('Añadiste un producto', expect.any(Object));

	});

	test('debe de cambiar el contenido del setShowButtons y localStorage al presionar el botón Quitalo del carrito', () => {

		const showButtons = {
			shopAdvanced: false,
			shopBasic: true,
		};
		const setShowButtons = jest.fn();
		const mainMaintenanceCart = [{
			nameItem: "Mantenimiento básico",
			tagItem: "Full",
			stateItem: true,
			priceItem: 500.00,
			detailItem: [],
		}];
		const setMainMaintenanceCart = jest.fn();

		const wrapper = mount(
			<Provider store={ store }>
				<MemoryRouter>
					<SectionMaintenanceBasic
						arrBasic={ arrayDetails }
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
