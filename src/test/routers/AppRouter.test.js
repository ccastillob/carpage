
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';

import { AppRouter } from 'routers/AppRouter';

const middlewares = [ thunk ];
const mockStore = configureStore( middlewares );

describe('Pruebas en <AppRouter />', () => {

	const initState = {};
	const store = mockStore( initState );

	test('debe existir el ScrollToTop y el LoadingPage', () => {

		const wrapper = mount(
			<Provider store={ store }>
				<AppRouter />
			</Provider>
		)

		expect( wrapper.find('LoadingPage').exists() ).toBe(true);
		expect( wrapper.find('ScrollToTop').exists() ).toBe(true);

	});

})