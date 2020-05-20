import React from 'react';
import { mount } from 'enzyme';
import { useDispatch } from 'react-redux';

import { Toolbar } from './Toolbar';
import { scaleSelector, localeSelector } from '../../store/Header.selectors';
import { locationSelector } from '../../../weather/store/Weather.selectors';
import { SCALE } from './components/scale-switcher/ScaleSwitcher.models';
import { LOCALE } from '../../../../../localization/localization.models';
import { Refresher } from './components';
import { loadWeatherInfo } from '../../../weather/store/Weather.thunks';
import { loadBackground } from '../../../../store/App.thunks';
import { LocaleItem } from './components/locale-picker/components';
import { setLocale, setScale } from '../../store/Header.actions';

jest.mock('react-redux', () => ({
    useSelector: jest.fn(fn => fn()),
    useDispatch: jest.fn(),
}));
jest.mock('../../../weather/store/Weather.thunks', () => ({ loadWeatherInfo: jest.fn() }));
jest.mock('../../../../store/App.thunks', () => ({ loadBackground: jest.fn() }));
jest.mock('../../store/Header.actions', () => ({ setScale: jest.fn(), setLocale: jest.fn() }));
jest.mock('../../../weather/store/Weather.selectors', () => ({ locationSelector: jest.fn() }));
jest.mock('../../store/Header.selectors', () => ({ scaleSelector: jest.fn(), localeSelector: jest.fn() }));

describe('Toolbar', () => {
    const mockLocation = {
        city: 'Minsk',
        country: 'BY',
    };

    const dispatchSpy = jest.fn();
    useDispatch.mockReturnValue(dispatchSpy);

    scaleSelector.mockReturnValue(SCALE.CELCIUS);
    localeSelector.mockReturnValue(LOCALE.EN);
    locationSelector.mockReturnValue(mockLocation);

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should be defined', () => {
        const toolbar = mount(<Toolbar />);
        expect(toolbar).toBeDefined();
    });

    it('should load background image and weather info on refresh button click', () => {
        const toolbar = mount(<Toolbar />);
        toolbar.find(Refresher).simulate('click');

        expect(dispatchSpy).toHaveBeenCalledTimes(2);
        expect(loadBackground).toBeCalled();
        expect(loadWeatherInfo).toHaveBeenCalledWith(mockLocation.city, LOCALE.EN, new AbortController());
    });

    it('should set selected locale', () => {
        const toolbar = mount(<Toolbar />);
        toolbar.find('[className^="dropdownButton"]').simulate('click');
        toolbar.find(LocaleItem).at(1).simulate('click');

        expect(dispatchSpy).toHaveBeenCalled();
        expect(setLocale).toHaveBeenCalledWith(LOCALE.RU);
    });

    it('should set selected temperature scale', () => {
        const toolbar = mount(<Toolbar />);
        toolbar.find('[className^="fahrenheit"]').simulate('click');

        expect(dispatchSpy).toHaveBeenCalled();
        expect(setScale).toHaveBeenCalledWith(SCALE.FAHRENHEIT);
    });
});
