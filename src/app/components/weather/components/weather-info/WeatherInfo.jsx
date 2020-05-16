import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './WeatherInfo.styles';
import { useLocalization } from '../../../../common/useLocalization';

export const WeatherInfo = ({ info }) => {
    const { temperatureInfo, infoRecord } = useStyles();
    const localization = useLocalization();

    return (
        <div className={temperatureInfo}>
            <div className={infoRecord}>{info.description.name}</div>
            <div className={infoRecord}>{`${localization.feelsLike}: ${info.feelsLike}°`}</div>
            <div className={infoRecord}>{`${localization.wind}: ${info.wind} ${localization.ms}`}</div>
            <div className={infoRecord}>{`${localization.humidity}: ${info.humidity}%`}</div>
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
