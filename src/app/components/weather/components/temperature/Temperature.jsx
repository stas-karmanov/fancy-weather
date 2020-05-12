import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './Temperature.styles';

export const Temperature = ({ temperature, tempFontSize, degreesFontSize }) => {
    const classes = useStyles({ tempFontSize, degreesFontSize });

    return (
        <div className={classes.temperatureWrapper}>
            <div className={classes.temperature}>{`${temperature}`}</div>
            <div className={classes.degreesSign}>°</div>
        </div>
    );
};

Temperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    tempFontSize: PropTypes.number.isRequired,
    degreesFontSize: PropTypes.number.isRequired,
};
