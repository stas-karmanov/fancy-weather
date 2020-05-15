import React, { useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Search, Toolbar } from './components';
import { useStyles } from './Header.styles';
import { loadWeatherInfo } from '../weather/store/Weather.thunks';
import { localeSelector } from './store/Header.selectors';

export const Header = () => {
    const { header } = useStyles();
    const dispatch = useDispatch();
    const locale = useSelector(localeSelector);
    const controller = useRef(new AbortController());

    const onSearch = useCallback(
        city => {
            controller.current.abort();
            controller.current = new AbortController();

            dispatch(loadWeatherInfo(city, locale, controller.current));
        },
        [dispatch, locale],
    );

    return (
        <div className={header}>
            <Toolbar />
            <Search onSearch={onSearch} />
        </div>
    );
};
