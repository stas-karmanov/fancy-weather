import React, { useRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { Search, Toolbar } from './components';
import { useStyles } from './Header.styles';
import { loadWeatherInfo } from '../weather/store/Weather.thunks';

export const Header = () => {
    const { header } = useStyles();
    const dispatch = useDispatch();
    const controller = useRef(new AbortController());

    const onSearch = useCallback(
        city => {
            controller.current.abort();
            controller.current = new AbortController();
            dispatch(loadWeatherInfo(city, controller.current));
        },
        [dispatch],
    );

    return (
        <div className={header}>
            <Toolbar />
            <Search onSearch={onSearch} />
        </div>
    );
};
