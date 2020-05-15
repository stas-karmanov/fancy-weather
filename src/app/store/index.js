import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import { config } from '../config';
import { weatherReducer } from '../components/weather/store/Weather.reducer';
import { headerReducer } from '../components/header/store/Header.reducer';
import { backgroundReducer } from './App.reducers';
import { coordinatesInfoReducer } from '../components/coordinates-info/store/CoordinatesInfo.reducer';
import { errorsReducer } from '../components/errors/store/Errors.reducer';

export const store = createStore(
    combineReducers({
        weather: weatherReducer,
        header: headerReducer,
        coordinatesInfo: coordinatesInfoReducer,
        background: backgroundReducer,
        errors: errorsReducer,
    }),
    compose(applyMiddleware(thunkMiddleware), config.ENV === 'development' ? composeWithDevTools() : undefined),
);
