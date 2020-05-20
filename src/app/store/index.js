import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import { weatherReducer } from '../components/weather/store/Weather.reducer';
import { headerReducer } from '../components/header/store/Header.reducer';
import { backgroundReducer } from './App.reducers';
import { coordinatesInfoReducer } from '../components/coordinates-info/store/CoordinatesInfo.reducer';
import { errorsReducer } from '../components/errors/store/Errors.reducer';
import { localStorageMiddleware } from './middlewares';

export const store = createStore(
    combineReducers({
        weather: weatherReducer,
        header: headerReducer,
        coordinatesInfo: coordinatesInfoReducer,
        background: backgroundReducer,
        errors: errorsReducer,
    }),
    composeWithDevTools(applyMiddleware(thunkMiddleware, localStorageMiddleware)),
);
