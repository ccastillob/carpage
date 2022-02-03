
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { maintenanceDetailsBasic } from 'test/data/sectionMaintenanceBasic';
import MaintenancePage from 'components/pages/MaintenancePage';
import { useFetchAllMaintenances } from 'hooks/useFetchAllMaintenances';
import { maintenanceDetailsAdvanced } from 'test/data/sectionMaintenanceAdvanced';
import { SectionMaintenanceBasic } from 'components/organisms/SectionMaintenanceBasic';
import { SectionMaintenanceAdvanced } from 'components/organisms/SectionMaintenanceAdvanced';
import SkeletonMaintenance from 'components/skeletons/SkeletonMaintenance';

jest.mock('hooks/useFetchAllMaintenances');

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Pruebas en <MaintenancePage />', () => {

	beforeAll( () => {
		jest.clearAllMocks();
	});

	const initState = {
		dataMaintenanceBasic: maintenanceDetailsBasic,
		dataMaintenanceAdvanced: maintenanceDetailsAdvanced
	};

	const store = mockStore( initState );

	useFetchAllMaintenances.mockReturnValue({
		data: maintenanceDetailsBasic,
		loading: false
	})

	const wrapper = mount(
		<Provider store={ store }>
			<MemoryRouter >
				<MaintenancePage />
			</MemoryRouter>
		</Provider>
	)

	test('debe de mostrar los componentes SectionMaintenanceBasic y SectionMaintenanceAdvanced', () => {

		expect( wrapper.find('main').find(SectionMaintenanceBasic).length ).toBe(1);
		expect( wrapper.find('main').find(SectionMaintenanceAdvanced).length ).toBe(1);

	});

	test('debe de mostrar el componente SkeletonMaintenance cuando no hay data', () => {

		useFetchAllMaintenances.mockReturnValue({
			data: [],
			loading: true
		})

		const wrapper = mount(
			<Provider store={ store }>
				<MemoryRouter >
					<MaintenancePage />
				</MemoryRouter>
			</Provider>
		)

		expect( wrapper.find(SkeletonMaintenance).length ).toBe(1);

	});

});
