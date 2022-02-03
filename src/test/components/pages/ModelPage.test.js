
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';

import ModelPage from 'components/pages/ModelPage';
import { useFetchAllModels } from 'hooks/useFetchAllModels';
import { models } from 'test/data/models';
import { CardModel } from 'components/organisms/CardModel';
import SkeletonModelCard from 'components/skeletons/SkeletonModelCard';

jest.mock('hooks/useFetchAllModels');

const middlewares = [ thunk ];
const mockStore = configureStore( middlewares );

describe('Pruebas en <ModelPage />', () => {

	const initState = {};
	const store = mockStore( initState );

	useFetchAllModels.mockReturnValue({
		data: models,
		loading: false
	})

	const wrapper = mount(
		<Provider store={ store }>
			<MemoryRouter>
				<ModelPage />
			</MemoryRouter>
		</Provider>
	)

	test('debe mostrarse el componente <CardModel /> según la cantidad de elementos', () => {

		expect( wrapper.find(CardModel).length ).toBe( models.length );

	});

	test('debe de mostrarse el componente <SkeletonModelCard /> si no existe data', () => {

		useFetchAllModels.mockReturnValue({
			data: [],
			loading: true
		})

		const wrapper = mount(
			<Provider store={ store }>
				<MemoryRouter>
					<ModelPage />
				</MemoryRouter>
			</Provider>
		)

		expect( wrapper.find(SkeletonModelCard).prop('dataArrLength') ).toBe(8);

	});

});
