import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ScaleSwitcher, BackgroundRefresher, LocalePicker } from './components';
import { scaleSelector, localeSelector } from '../../store/Header.selectors';
import { setScale, setLocale } from '../../store/Header.actions';
import { useStyles } from './Toolbar.styles';
import { loadBackground } from '../../../../store/App.thunks';

export const Toolbar = () => {
    const classes = useStyles();
    const temperatureScale = useSelector(scaleSelector);
    const selectedLocale = useSelector(localeSelector);
    const dispatch = useDispatch();

    const onScaleChange = useCallback(scale => dispatch(setScale(scale)), [dispatch]);
    const onRefresh = useCallback(() => dispatch(loadBackground()), [dispatch]);
    const onLocaleSelect = useCallback(locale => dispatch(setLocale(locale)), [dispatch]);

    return (
        <div className={classes.toolbar}>
            <BackgroundRefresher onRefresh={onRefresh} />
            <LocalePicker selectedLocale={selectedLocale} onSelect={onLocaleSelect} />
            <ScaleSwitcher scale={temperatureScale} onChange={onScaleChange} />
        </div>
    );
};
