import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ScaleSwitcher } from './components';
import { scaleSelector } from '../../store/Header.selectors';
import { setScale } from '../../store/Header.actions';

export const Toolbar = () => {
    const temperatureScale = useSelector(scaleSelector);
    const dispatch = useDispatch();

    const onScaleChange = useCallback(scale => dispatch(setScale(scale)), [dispatch]);

    return (
        <div>
            <ScaleSwitcher scale={temperatureScale} onChange={onScaleChange} />
        </div>
    );
};
