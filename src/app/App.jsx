import React from 'react';
import { useSelector } from 'react-redux';

import { Weather, Header, CoordinatesInfo } from './components';
import { useStyles } from './App.styles';
import { backgroundSelector } from './store/App.selectors';

export const App = () => {
    const classes = useStyles();
    const backgroundUrl = useSelector(backgroundSelector);

    return (
        <div className={classes.app} style={{ background: `url("${backgroundUrl}") no-repeat center` }}>
            <div className={classes.wrapper}>
                <div className={classes.header}>
                    <Header />
                </div>
                <div className={classes.main}>
                    <Weather />
                    <CoordinatesInfo />
                </div>
            </div>
        </div>
    );
};
