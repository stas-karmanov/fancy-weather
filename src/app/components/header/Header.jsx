import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

import { Search } from './components';
import { useStyles } from './Header.styles';
import { loadWeatherInfo } from '../weather/store/Weather.thunks';

export const Header = () => {
    const { header } = useStyles();
    const dispatch = useDispatch();
    const controller = useRef(new AbortController());

    return (
        <div className={header}>
            <Search
                onSearch={city => {
                    controller.current.abort();
                    controller.current = new AbortController();
                    dispatch(loadWeatherInfo(city, controller.current));
                }}
            />
        </div>
    );
};
