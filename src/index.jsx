import ReactDom from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';

import './theme/styles.css';
import { App } from './app/App';
import { store } from './app/store';
import { Localizator } from './app/localizator/Localizator';

ReactDom.render(
    <Provider store={store}>
        <Localizator>
            <App />
        </Localizator>
    </Provider>,
    document.getElementById('root'),
);
