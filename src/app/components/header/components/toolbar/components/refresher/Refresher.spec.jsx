import React from 'react';
import { shallow } from 'enzyme';

import { Refresher } from './Refresher';

describe('Refresher', () => {
    it('should be defined', () => {
        const refresher = shallow(<Refresher onRefresh={new Function()} />);
        expect(refresher).toBeDefined();
    });

    it('should call onRefresh while clicking', () => {
        const onRefreshSpy = jest.fn();

        const refresher = shallow(<Refresher onRefresh={onRefreshSpy} />);
        refresher.find('div').simulate('click');

        expect(onRefreshSpy).toHaveBeenCalledTimes(1);
    });
});
