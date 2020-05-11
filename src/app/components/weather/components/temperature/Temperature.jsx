import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './Temperature.styles';

export const Temperature = ({ temperature }) => {
    const classes = useStyles();

    return (
        <div className={classes.temperatureWrapper}>
            <div className={classes.temperature}>{`${temperature}`}</div>
            <div className={classes.degreesSign}>°</div>
        </div>
    );
};

Temperature.propTypes = {
    temperature: PropTypes.number.isRequired,
};
