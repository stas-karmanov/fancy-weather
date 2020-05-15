import { weatherService } from '../../../services';
import { setWeather } from './Weather.actions';
import { addError } from '../../errors/store/Errors.actions';
import { loadCoordinatesInfo } from '../../coordinates-info/store/CoordinatesInfo.thunks';

export const loadWeatherInfo = (city, locale, abortController) => dispatch => {
    weatherService
        .getWeatherInfo({ region: city, forecastLength: 4, abortController, locale })
        .then(weatherInfo => {
            dispatch(setWeather(weatherInfo));
            dispatch(loadCoordinatesInfo(city, abortController));
        })
        .catch(() => dispatch(addError(`${city} weather info not found!`)));
};
