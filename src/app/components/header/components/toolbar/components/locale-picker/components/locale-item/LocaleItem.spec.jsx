import React from 'react';
import { shallow } from 'enzyme';

import { LocaleItem } from './LocaleItem';
import { LOCALE } from '../../../../../../../../../localization/localization.models';

describe('LocaleItem', () => {
    it('should be defined', () => {
        const localeItem = shallow(<LocaleItem locale={LOCALE.EN} isSelected={true} onSelect={new Function()} />);
        expect(localeItem).toBeDefined();
    });

    it('should call onSelect with appropriate locale while clicking', () => {
        const onSelectSpy = jest.fn();
        const localeItem = shallow(<LocaleItem locale={LOCALE.EN} isSelected={true} onSelect={onSelectSpy} />);
        localeItem.find('div').simulate('click');

        expect(onSelectSpy).toHaveBeenCalledTimes(1);
        expect(onSelectSpy).toHaveBeenCalledWith(LOCALE.EN);
    });
});
