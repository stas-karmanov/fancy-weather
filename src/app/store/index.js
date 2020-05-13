import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import { config } from '../config';
import { weatherReducer } from '../components/weather/store/Weather.reducer';
import { headerReducer } from '../components/header/store/Header.reducer';
import { backgroundReducer } from './App.reducers';

export const store = createStore(
    combineReducers({
        weather: weatherReducer,
        header: headerReducer,
        background: backgroundReducer,
    }),
    compose(applyMiddleware(thunkMiddleware), config.ENV === 'development' ? composeWithDevTools() : undefined),
);
