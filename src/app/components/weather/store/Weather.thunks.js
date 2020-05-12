import { weatherService } from '../../../services';
import { setWeather } from './Weather.actions';

export const loadWeatherInfo = (city, abortController) => dispatch => {
    weatherService.getWeatherInfo(city, 4, abortController).then(weatherInfo => dispatch(setWeather(weatherInfo)));
};
