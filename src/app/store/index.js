import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import { config } from '../config';
import { weatherReducer } from '../components/weather/store/Weather.reducer';

export const store = createStore(
    combineReducers({
        weather: weatherReducer,
    }),
    compose(applyMiddleware(thunkMiddleware), config.ENV === 'development' ? composeWithDevTools() : undefined),
);
