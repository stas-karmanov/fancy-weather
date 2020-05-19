import React from 'react';
import { mount, shallow } from 'enzyme';
import { act } from 'react-dom/test-utils';

import { LocalePicker } from './LocalePicker';
import { LocaleItem } from './components';
import { LOCALE } from '../../../../../../../localization/localization.models';

describe('LocalePicker', () => {
    it('should be defined', () => {
        const localePicker = shallow(<LocalePicker selectedLocale={LOCALE.EN} onSelect={new Function()} />);
        expect(localePicker).toBeDefined();
    });

    it('should render dropdown while clicking', () => {
        const localePicker = mount(<LocalePicker selectedLocale={LOCALE.EN} onSelect={new Function()} />);
        localePicker.find('[className^="dropdownButton"]').simulate('click');

        expect(localePicker.find('[className^="dropdownList"]').length).toBe(1);
    });

    it('should call onSelect with appropriate locale', () => {
        const onSelectSpy = jest.fn();
        const localePicker = mount(<LocalePicker selectedLocale={LOCALE.EN} onSelect={onSelectSpy} />);
        localePicker.find('[className^="dropdownButton"]').simulate('click');
        localePicker.find('[className^="dropdownList"]').find(LocaleItem).at(1).simulate('click');

        expect(onSelectSpy).toHaveBeenCalledTimes(1);
        expect(onSelectSpy).toHaveBeenCalledWith(LOCALE.RU);
    });

    it('should collapse dropdown while outside clicking', () => {
        const wrapper = document.createElement('div');
        document.body.append(wrapper);

        const localePickerWrapper = mount(<LocalePicker selectedLocale={LOCALE.EN} onSelect={new Function()} />, {
            attachTo: wrapper,
        });

        localePickerWrapper.find('[className^="dropdownButton"]').simulate('click');
        expect(localePickerWrapper.find('[className^="dropdownList"]').length).toBe(1);

        act(() => {
            wrapper.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        });
        localePickerWrapper.update();

        expect(localePickerWrapper.find('[className^="dropdownList"]').length).toBe(0);
    });
});
