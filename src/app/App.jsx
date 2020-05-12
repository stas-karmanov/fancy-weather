import React, { useState, useEffect } from 'react';

import { imagesService } from './services/images';
import { Weather, Header } from './components';
import { useStyles } from './App.styles';

export const App = () => {
    const { app, wrapper, header } = useStyles();
    const [backgroundUrl, setBackground] = useState('');

    useEffect(() => {
        imagesService.getRandomImage().then(setBackground);
    }, []);

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
