import { weatherService } from '../../../services/weather';

export const weatherForecastSelector = ({ weather: { forecast }, header: { scale } }) => {
    if (!forecast) {
        return forecast;
    }

    return weatherService.convertWeather(forecast, scale);
};
export const locationSelector = ({ weather: { location } }) => location;
