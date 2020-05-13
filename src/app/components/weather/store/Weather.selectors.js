import { weatherService } from '../../../services/weather';

export const weatherForecastSelector = ({ weather, header: { scale } }) => {
    if (!weather) {
        return weather;
    }

    return weatherService.convertWeather(weather.forecast, scale);
};
export const locationSelector = ({ weather }) => weather && weather.location;
