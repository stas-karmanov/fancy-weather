import { setWeather } from './Weather.actions';

export const weatherReducer = (state = null, action) => {
    switch (action.type) {
        case setWeather.type:
            return action.payload;
        default:
            return state;
    }
};
