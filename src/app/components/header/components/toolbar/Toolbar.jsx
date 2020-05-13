import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ScaleSwitcher, BackgroundRefresher } from './components';
import { scaleSelector } from '../../store/Header.selectors';
import { setScale } from '../../store/Header.actions';
import { useStyles } from './Toolbar.styles';
import { loadBackground } from '../../../../store/App.thunks';

export const Toolbar = () => {
    const classes = useStyles();
    const temperatureScale = useSelector(scaleSelector);
    const dispatch = useDispatch();

    const onScaleChange = useCallback(scale => dispatch(setScale(scale)), [dispatch]);
    const onRefresh = useCallback(() => dispatch(loadBackground()), [dispatch]);

    return (
        <div className={classes.toolbar}>
            <BackgroundRefresher onRefresh={onRefresh} />
            <ScaleSwitcher scale={temperatureScale} onChange={onScaleChange} />
        </div>
    );
};
