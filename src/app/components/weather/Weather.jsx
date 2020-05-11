import React, { useState, useEffect } from 'react';

import { geolocationService, weatherService } from '../../services';
import { Location, Temperature, WeatherInfo } from './components';
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

        weatherService.getWeatherInfo(locationInfo.city).then(setWeatherInfo);
    }, [locationInfo]);

    if (!locationInfo || !weatherInfo) {
        return null;
    }

    return (
        <div>
            <Location location={locationInfo} />
            <div className={classes.todayWeatherInfo}>
                <Temperature temperature={weatherInfo.forecast[0].temp} />
                <div className={classes.weatherInfo}>
                    <WeatherInfo info={weatherInfo.forecast[0]} />
                </div>
            </div>
        </div>
    );
};
