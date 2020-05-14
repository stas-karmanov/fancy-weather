import React, { useEffect, useContext, useCallback, useReducer } from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './Location.styles';
import { LocaleContext } from '../../../../localizator/Localizator';

export const Location = ({ location: { country, city } }) => {
    const classes = useStyles();
    const { days, months } = useContext(LocaleContext);

    const getDate = useCallback(
        date => {
            const minutes = date.getMinutes().toString().padStart(2, '0');

            return `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]} ${date.getHours()}:${minutes}`;
        },
        [days, months],
    );

    const [date, updateDate] = useReducer((_, date) => getDate(date), getDate(new Date()));

    useEffect(() => {
        const intervalId = setInterval(() => updateDate(new Date()), 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className={classes.locationWrapper}>
            <div className={classes.location}>{`${city}, ${country}`}</div>
            <div className={classes.time}>{date}</div>
        </div>
    );
};

Location.propTypes = {
    location: PropTypes.shape({
        country: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
    }).isRequired,
};
