import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Weather, Header } from './components';
import { useStyles } from './App.styles';
import { loadBackground } from './store/App.thunks';
import { backgroundSelector } from './store/App.selectors';

export const App = () => {
    const { app, wrapper, header } = useStyles();
    const backgroundUrl = useSelector(backgroundSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadBackground());
    }, [dispatch]);

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
