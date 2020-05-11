import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './WeatherInfo.styles';

export const WeatherInfo = ({ info }) => {
    const { temperatureInfo, infoRecord } = useStyles();

    return (
        <div className={temperatureInfo}>
            <div className={infoRecord}>{info.description.name}</div>
            <div className={infoRecord}>{`Feels Like: ${info.feelsLike}°`}</div>
            <div className={infoRecord}>{`Wind: ${info.wind} m/s`}</div>
            <div className={infoRecord}>{`Humidity: ${info.humidity}%`}</div>
        </div>
    );
};

WeatherInfo.propTypes = {
    info: PropTypes.shape({
        feelsLike: PropTypes.number.isRequired,
        humidity: PropTypes.number.isRequired,
        description: PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        }).isRequired,
        wind: PropTypes.number.isRequired,
    }).isRequired,
};
