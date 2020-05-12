import React from 'react';
import PropTypes from 'prop-types';

import { Temperature } from '../temperature/Temperature';
import { useStyles } from './WeatherForecast.styles';
import { WEEK_DAYS } from './WeatherForecast.models';

export const WeatherForecast = ({ forecast }) => {
    const classes = useStyles();

    return (
        <div className={classes.forecast}>
            {forecast.map(({ temp, date, description: { id } }) => (
                <div className={classes.dayForecast} key={temp + date + id}>
                    <div className={classes.day}>{getWeekDay(date)}</div>
                    <Temperature temperature={temp} tempFontSize={80} degreesFontSize={80} />
                </div>
            ))}
        </div>
    );
};

const getWeekDay = date => WEEK_DAYS[new Date(date).getDay()];

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
