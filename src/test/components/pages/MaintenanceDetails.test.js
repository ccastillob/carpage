
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import MaintenanceDetails from 'components/pages/MaintenanceDetails';
import { maintenanceDetailsBasic } from 'test/data/sectionMaintenanceBasic';
import { maintenanceDetailsAdvanced } from 'test/data/sectionMaintenanceAdvanced';
import SuccessIcon from 'components/icons/static/SuccessIcon';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Pruebas en <MaintenanceDetails />', () => {

	beforeAll( () => {
		jest.clearAllMocks();
	});

	test('debe de mostrar los textos correctamente del mantenimiento básico', () => {

		const initState = {
			dataMaintenanceBasic: maintenanceDetailsBasic,
			dataMaintenanceAdvanced: maintenanceDetailsAdvanced
		};
		const store = mockStore( initState );

		const match = {
			params: {
				nameType: 'basic'
			}
		}

		const wrapper = mount(
			<Provider store={ store }>
				<MemoryRouter initialEntries={['maintenances/basic']}>
					<MaintenanceDetails match={ match } />
				</MemoryRouter>
			</Provider>
		)

		expect( wrapper.find('h2').text().trim() ).toEqual('Mantenimiento Básico');

		expect( wrapper.find('h3').at(1).text().trim() ).toEqual('Neumáticos');
		expect( wrapper.find('.maintenance-services__section-details').find('h4').at(0).text().trim() ).toEqual('incluido');

		expect( wrapper.find('h3').at(3).text().trim() ).toEqual('Asientos');
		expect( wrapper.find('.maintenance-services__section-details').find('h4').at(1).text().trim() ).toEqual('incluido');

		expect( wrapper.find('h3').at(5).text().trim() ).toEqual('Volante');
		expect( wrapper.find('.maintenance-services__section-details').find('h4').at(2).text().trim() ).toEqual('incluido');

		expect( wrapper.find('h3').at(7).text().trim() ).toEqual('Frenos');
		expect( wrapper.find('.maintenance-services__section-details').find('h4').at(3).text().trim() ).toEqual('incluido');

		expect( wrapper.find('.maintenance-container-total').find('h3').at(0).text().trim() ).toEqual('TOTAL');

		expect( wrapper.find('.maintenance-services').find(SuccessIcon).length ).toBe(maintenanceDetailsBasic.arrayDetails.length);

	});

});
