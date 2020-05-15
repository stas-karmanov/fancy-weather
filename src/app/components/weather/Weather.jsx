import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { geolocationService } from '../../services';
import { Location, Temperature, WeatherInfo, WeatherForecast } from './components';
import { useStyles } from './Weather.styles';
import { loadWeatherInfo } from './store/Weather.thunks';
import { weatherForecastSelector, locationSelector } from './store/Weather.selectors';
import { localeSelector } from '../header/store/Header.selectors';
import { addError } from '../errors/store/Errors.actions';

export const Weather = () => {
    const classes = useStyles();
    const weatherForecast = useSelector(weatherForecastSelector);
    const locale = useSelector(localeSelector);
    const dispatch = useDispatch();

    const locationInfo = useSelector(locationSelector);
    const locationRef = useRef(locationInfo);
    const localeRef = useRef(locale);

    useEffect(() => {
        locationRef.current = locationInfo;
        localeRef.current = locale;
    });

    useEffect(() => {
        const controller = new AbortController();

        geolocationService
            .getGeolocationInfo()
            .then(({ city }) => dispatch(loadWeatherInfo(city, localeRef.current, controller)))
            .catch(() => dispatch(addError('Geolocation request failed!')));

        return () => controller.abort();
    }, [dispatch]);

    useEffect(() => {
        if (!locationRef.current) {
            return;
        }

        const controller = new AbortController();
        dispatch(loadWeatherInfo(locationRef.current.city, locale, controller));

        return () => controller.abort();
    }, [dispatch, locale]);

    if (!weatherForecast || !locationInfo) {
        return null;
    }

    return (
        <div>
            <Location location={locationInfo} />
            <div className={classes.todayWeatherInfo}>
                <Temperature temperature={weatherForecast[0].temp} tempFontSize={306} degreesFontSize={100} />
                <div className={classes.weatherInfo}>
                    <WeatherInfo info={weatherForecast[0]} />
                </div>
            </div>
            <WeatherForecast forecast={weatherForecast.slice(1)} />
        </div>
    );
};
