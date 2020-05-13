import React from 'react';
import { useSelector } from 'react-redux';

import { Map, Coordinates } from './components';
import { coordinatesInfoSelector } from './store/CoordinatesInfo.selectors';
import { useStyles } from './CoordinatesInfo.styles';

export const CoordinatesInfo = () => {
    const classes = useStyles();
    const coordinatesInfo = useSelector(coordinatesInfoSelector);

    if (!coordinatesInfo) {
        return null;
    }

    return (
        <div className={classes.coordinatesInfo}>
            <Map coordinatesInfo={coordinatesInfo} />
            <Coordinates coordinatesInfo={coordinatesInfo} />
        </div>
    );
};
