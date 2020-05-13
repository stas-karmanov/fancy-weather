import React from 'react';
import { useSelector } from 'react-redux';

import { Weather, Header } from './components';
import { useStyles } from './App.styles';
import { backgroundSelector } from './store/App.selectors';

export const App = () => {
    const { app, wrapper, header } = useStyles();
    const backgroundUrl = useSelector(backgroundSelector);

    return (
        <div className={app} style={{ background: `url("${backgroundUrl}") no-repeat center` }}>
            <div className={wrapper}>
                <div className={header}>
                    <Header />
                </div>
                <Weather />
            </div>
        </div>
    );
};
