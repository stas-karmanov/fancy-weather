import React, { useState, useEffect } from 'react';

import { imagesService } from './services/images';
import { Weather } from './components';

export const App = () => {
    const [backgroundUrl, setBackground] = useState('');

    useEffect(() => {
        imagesService.getRandomImage().then(setBackground);
    }, []);

    return (
        <div style={{ background: `url("${backgroundUrl}") no-repeat center`, height: '100vh', width: '100%' }}>
            <Weather />
        </div>
    );
};
