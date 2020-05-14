import React, { useCallback, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ScaleSwitcher, Refresher, LocalePicker } from './components';
import { scaleSelector, localeSelector } from '../../store/Header.selectors';
import { setScale, setLocale } from '../../store/Header.actions';
import { useStyles } from './Toolbar.styles';
import { loadBackground } from '../../../../store/App.thunks';
import { loadWeatherInfo } from '../../../weather/store/Weather.thunks';
import { locationSelector } from '../../../weather/store/Weather.selectors';

export const Toolbar = () => {
    const classes = useStyles();
    const temperatureScale = useSelector(scaleSelector);
    const selectedLocale = useSelector(localeSelector);
    const location = useSelector(locationSelector);
    const dispatch = useDispatch();

    const controller = useRef(new AbortController());

    const onScaleChange = useCallback(scale => dispatch(setScale(scale)), [dispatch]);
    const onRefresh = useCallback(() => {
        if (!location) {
            return;
        }

        controller.current.abort();
        controller.current = new AbortController();

        dispatch(loadBackground());
        dispatch(loadWeatherInfo(location.city, selectedLocale, controller.current));
    }, [dispatch, location, selectedLocale]);
    const onLocaleSelect = useCallback(locale => dispatch(setLocale(locale)), [dispatch]);

    return (
        <div className={classes.toolbar}>
            <Refresher onRefresh={onRefresh} />
            <LocalePicker selectedLocale={selectedLocale} onSelect={onLocaleSelect} />
            <ScaleSwitcher scale={temperatureScale} onChange={onScaleChange} />
        </div>
    );
};
