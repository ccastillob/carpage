
import '@testing-library/jest-dom';
import { LoadingPage } from 'components/pages/LoadingPage';
import { shallow } from 'enzyme';
import { SwapSpinner } from 'react-spinners-kit';

describe('Pruebas en <LoadingPage />', () => {

	const wrapper = shallow(<LoadingPage />);

	test('debe de tener el componente SwapSpinner', () => {

		expect( wrapper.find(SwapSpinner).prop('size') ).toBe(70);

	});

});
