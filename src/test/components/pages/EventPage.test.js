
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';
import { MemoryRouter, Route } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import EventPage from 'components/pages/EventPage';
import Shop from 'components/pages/Shop';
import HomePage from 'components/pages/HomePage';

const middlewares = [ thunk ];
const mockStore = configureStore( middlewares );

describe('Pruebas en <EventPage />', () => {

	const initState = {};
	const store = mockStore( initState );

	const wrapper = mount(
		<Provider store={ store }>
			<MemoryRouter>
				<EventPage />
			</MemoryRouter>
		</Provider>
	)

	test('debe de mostrarse la pantalla de eventos', () => {

		const wrapper = mount(
			<Provider store={ store }>
				<MemoryRouter initialEntries={ ['/events'] }>
					<Route exact path='/events' component={ EventPage } />
					<Route exact path='/shop' component={ Shop } />
					<Route path="/" component={ HomePage } />
				</MemoryRouter>
			</Provider>
		);

		expect(wrapper.find('.eventpage').exists() ).toBe(true);

	});

	test('no debe de mostrarse la pantalla de eventos', () => {

		const wrapper = mount(
			<Provider store={ store }>
				<MemoryRouter initialEntries={ ['/events2141'] }>
					<Route exact path='/events' component={ EventPage } />
					<Route exact path='/shop' component={ Shop } />
					<Route path="/" component={ HomePage } />
				</MemoryRouter>
			</Provider>
		);

		expect(wrapper.find('.homepage').exists() ).toBe(true);

	});

	test('debe de mostrar los titulos de los eventos', () => {

		expect( wrapper.find('h1').at(0).text().trim() ).toEqual('Audi Racing');
		expect( wrapper.find('h1').at(1).text().trim() ).toEqual('Audi Evolution');
		expect( wrapper.find('h1').at(2).text().trim() ).toEqual('Audi Advanced');
		expect( wrapper.find('h1').at(3).text().trim() ).toEqual('Audi Night');

	});

	test('debe de mostrarse el componente LazyLoadImage en cada evento', () => {

		expect( wrapper.find(LazyLoadImage).at(0).prop('alt') ).toEqual('imageAudiRacing');
		expect( wrapper.find(LazyLoadImage).at(1).prop('alt') ).toEqual('imageAudiEvolution');
		expect( wrapper.find(LazyLoadImage).at(2).prop('alt') ).toEqual('imageAudiAdvanced');
		expect( wrapper.find(LazyLoadImage).at(3).prop('alt') ).toEqual('imageAudiNight');

	});

})
