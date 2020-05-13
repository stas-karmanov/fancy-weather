import { setForecast, setLocation, setWeather } from './Weather.actions';

const DEFAULT_STATE = {
    forecast: null,
    location: null,
};

export const weatherReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case setForecast.type:
            return { ...state, forecast: action.payload };
        case setLocation.type:
            return { ...state, location: action.payload };
        case setWeather.type:
            return action.payload;
        default:
            return state;
    }
};
