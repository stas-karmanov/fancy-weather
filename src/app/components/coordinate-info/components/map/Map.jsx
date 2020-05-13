import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

import { config } from '../../../../config';
import { useStyles } from './Map.styles';

export const Map = () => {
    const classes = useStyles();

    useEffect(() => {
        mapboxgl.accessToken = config.MAPS_API_KEY;

        new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/outdoors-v11',
            center: [11.255, 43.77],
            zoom: 13,
        });
    }, []);

    return <div className={classes.map} id="map"></div>;
};
