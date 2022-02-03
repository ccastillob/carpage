
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';

import DiscountPage from 'components/pages/DiscountPage';
import { CardDiscount } from 'components/organisms/CardDiscount';
import { useFetchAllDiscounts } from 'hooks/useFetchAllDiscounts';
import { discounts } from 'test/data/discounts';
import SkeletonDiscountCard from 'components/skeletons/SkeletonDiscountCard';

jest.mock('hooks/useFetchAllDiscounts');

const middlewares = [ thunk ];
const mockStore = configureStore( middlewares );

describe('Pruebas en <DiscountPage />', () => {

	const initState = {};
	const store = mockStore( initState );

	useFetchAllDiscounts.mockReturnValue({
		data: discounts,
		loading: false
	})

	const wrapper = mount(
		<Provider store={ store }>
			<MemoryRouter>
				<DiscountPage />
			</MemoryRouter>
		</Provider>
	)

	test('debe mostrarse el componente <CardDiscount /> según la cantidad de elementos', () => {

		expect( wrapper.find(CardDiscount).length ).toBe( discounts.length );

	});

	test('debe de mostrarse el componente <SkeletonDiscountCard /> si no existe data', () => {

		useFetchAllDiscounts.mockReturnValue({
			data: [],
			loading: true
		})

		const wrapper = mount(
			<Provider store={ store }>
				<MemoryRouter>
					<DiscountPage />
				</MemoryRouter>
			</Provider>
		)

		expect( wrapper.find(SkeletonDiscountCard).prop('dataArrLength') ).toBe(8);

	});

});
