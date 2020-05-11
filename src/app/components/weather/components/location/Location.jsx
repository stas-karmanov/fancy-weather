import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './Location.styles';
import { WEEK_DAYS, MONTHS } from './Location.models';

export const Location = ({ location: { country, city } }) => {
    const classes = useStyles();
    const [date, setDate] = useState(getDate());

    useEffect(() => {
        const intervalId = setInterval(() => setDate(getDate()), 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className={classes.locationWrapper}>
            <div className={classes.location}>{`${city}, ${country}`}</div>
            <div className={classes.time}>{date}</div>
        </div>
    );
};

const getDate = () => {
    const date = new Date();
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${WEEK_DAYS[date.getDay()]} ${date.getDate()} ${MONTHS[date.getMonth()]} ${date.getHours()}:${minutes}`;
};

Location.propTypes = {
    location: PropTypes.shape({
        country: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
    }).isRequired,
};
