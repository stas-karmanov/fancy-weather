import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import PropTypes from 'prop-types';

import { config } from '../../../../config';
import { useStyles } from './Map.styles';

export const Map = React.memo(({ coordinatesInfo }) => {
    const classes = useStyles();
    const map = useRef(null);

    useEffect(() => {
        mapboxgl.accessToken = config.MAPS_API_KEY;
        map.current = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/outdoors-v11',
            zoom: 10,
        });
    }, []);

    useEffect(() => {
        if (coordinatesInfo) {
            map.current.setCenter(coordinatesInfo);
        }
    }, [coordinatesInfo]);

    return <div className={classes.map} id="map"></div>;
});

Map.propTypes = {
    coordinatesInfo: PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired,
    }).isRequired,
};
