import React, { useContext, useCallback } from 'react';
import PropTypes from 'prop-types';

import { Temperature } from '../temperature/Temperature';
import { useStyles } from './WeatherForecast.styles';
import { LocaleContext } from '../../../../localizator/Localizator';

export const WeatherForecast = ({ forecast }) => {
    const classes = useStyles();
    const { days } = useContext(LocaleContext);

    const getDay = useCallback(date => days[new Date(date).getDay()], [days]);

    return (
        <div className={classes.forecast}>
            {forecast.map(({ temp, date, description: { id } }) => (
                <div className={classes.dayForecast} key={temp + date + id}>
                    <div className={classes.day}>{getDay(date)}</div>
                    <Temperature temperature={temp} tempFontSize={80} degreesFontSize={80} />
                </div>
            ))}
        </div>
    );
};

WeatherForecast.propTypes = {
    forecast: PropTypes.arrayOf(
        PropTypes.shape({
            temp: PropTypes.number.isRequired,
            date: PropTypes.string.isRequired,
            description: PropTypes.shape({
                id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired,
    ).isRequired,
};
