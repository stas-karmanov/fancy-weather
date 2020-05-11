import React, { useState, useEffect } from 'react';

import { geolocationService } from '../../services';
import { Location } from './components';

export const WeatherInfo = () => {
    const [locationInfo, setLocationInfo] = useState(null);

    useEffect(() => {
        geolocationService.getGeolocationInfo().then(setLocationInfo);
    }, []);

    return <div>{locationInfo ? <Location location={locationInfo} /> : ''}</div>;
};
