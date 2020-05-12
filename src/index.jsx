import ReactRom from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';

import './theme/styles.css';
import { App } from './app/App';
import { store } from './app/store';

ReactRom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
