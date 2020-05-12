import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { geolocationService } from '../../services';
import { Location, Temperature, WeatherInfo, WeatherForecast } from './components';
import { useStyles } from './Weather.styles';
import { loadWeatherInfo } from './store/Weather.thunks';
import { weatherForecastSelector, locationSelector } from './store/Weather.selectors';

export const Weather = () => {
    const classes = useStyles();
    const weatherForecast = useSelector(weatherForecastSelector);
    const locationInfo = useSelector(locationSelector);
    const dispatch = useDispatch();
    const controller = useRef(new AbortController());

    useEffect(() => {
        geolocationService.getGeolocationInfo().then(({ city }) => dispatch(loadWeatherInfo(city, controller.current)));
    }, [dispatch]);

    if (!weatherForecast || !locationInfo) {
        return null;
    }

    controller.current.abort();

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
