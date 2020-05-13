import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './Coordinates.styles';

// eslint-disable-next-line react/display-name
export const Coordinates = React.memo(({ coordinatesInfo: { lat, lng } }) => {
    const classes = useStyles();

    const latitude = parseCoordinates(lat);
    const longitude = parseCoordinates(lng);

    return (
        <div className={classes.coordinatesContainer}>
            <div className={classes.coordinates}>{`Latitude: ${latitude}`}</div>
            <div className={classes.coordinates}>{`Longitude: ${longitude}`}</div>
        </div>
    );
});

const parseCoordinates = value =>
    value
        .toFixed(2)
        .toString()
        .split('.')
        .map((val, i) => (i === 0 ? `${val}°` : `${val}'`))
        .join(' ');

Coordinates.propTypes = {
    coordinatesInfo: PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired,
    }).isRequired,
};
