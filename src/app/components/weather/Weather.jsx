import React, { useState, useEffect } from 'react';

import { geolocationService, weatherService } from '../../services';
import { Location, Temperature, WeatherInfo, WeatherForecast } from './components';
import { useStyles } from './Weather.styles';

export const Weather = () => {
    const classes = useStyles();
    const [locationInfo, setLocationInfo] = useState(null);
    const [weatherInfo, setWeatherInfo] = useState(null);

    useEffect(() => {
        geolocationService.getGeolocationInfo().then(setLocationInfo);
    }, []);

    useEffect(() => {
        if (!locationInfo) {
            return;
        }

        weatherService.getWeatherInfo(locationInfo.city, 4).then(setWeatherInfo);
    }, [locationInfo]);

    if (!locationInfo || !weatherInfo) {
        return null;
    }

    return (
        <div>
            <Location location={locationInfo} />
            <div className={classes.todayWeatherInfo}>
                <Temperature temperature={weatherInfo.forecast[0].temp} tempFontSize={306} degreesFontSize={100} />
                <div className={classes.weatherInfo}>
                    <WeatherInfo info={weatherInfo.forecast[0]} />
                </div>
            </div>
            <WeatherForecast forecast={weatherInfo.forecast.slice(1)} />
        </div>
    );
};
