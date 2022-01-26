
import React from 'react';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import ChangeThemeButton from 'components/molecules/ChangeThemeButton';


describe('Pruebas en <ChangeThemeButton />', () => {

	beforeEach(() => {
		Storage.prototype.setItem = jest.fn( () => {});
	})

	test('debe de mostrarse el modo light', () => {

		const wrapper = mount( <ChangeThemeButton /> );

		expect( wrapper.find('.ball').exists() ).toBe( true );
		expect( localStorage.setItem ).toHaveBeenLastCalledWith('mode', 'light');
		expect( localStorage.setItem ).toHaveBeenCalledTimes(1);

	});

	test('debe de mostrarse el modo dark', () => {

		const wrapper = mount( <ChangeThemeButton /> );
		wrapper.find('label').simulate('click');

		expect( wrapper.find('.ball.dark').exists() ).toBe( true );
		expect( localStorage.setItem ).toHaveBeenLastCalledWith('mode', 'dark');
		expect( localStorage.setItem ).toHaveBeenCalledTimes(2);

	});

});
