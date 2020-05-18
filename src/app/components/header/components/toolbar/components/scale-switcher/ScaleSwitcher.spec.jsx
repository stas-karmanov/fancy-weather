import React from 'react';
import { shallow } from 'enzyme';

import { ScaleSwitcher } from './ScaleSwitcher';
import { SCALE } from './ScaleSwitcher.models';

describe('ScaleSwitcher', () => {
    it('should be defined', () => {
        const scaleSwitcher = shallow(<ScaleSwitcher scale={SCALE.CELCIUS} onChange={new Function()} />);
        expect(scaleSwitcher).toBeDefined();
    });

    it('should call onChange with appropriate scale while clicking', () => {
        const onChangeSpy = jest.fn();
        const scaleSwitcher = shallow(<ScaleSwitcher scale={SCALE.CELCIUS} onChange={onChangeSpy} />);
        scaleSwitcher.find('[className^="сelсius"]').simulate('click');

        expect(onChangeSpy).toHaveBeenCalledTimes(1);
        expect(onChangeSpy).toHaveBeenCalledWith(SCALE.CELCIUS);
    });
});
