import { config } from '../config';
import { SCALE } from '../components/header/components/toolbar/components/scale-switcher/ScaleSwitcher.models';

class WeatherService {
    constructor() {
        this.endpoint = 'https://api.openweathermap.org/data/2.5';
    }

    getWeatherInfo(region, forecastLength, abortController) {
        return fetch(`${this.endpoint}/forecast?q=${region}&lang=en&units=metric&APPID=${config.WEATHER_API_KEY}`, {
            signal: abortController.signal,
        })
            .then(res => res.json())
            .then(({ list, city: { name, country } }) => ({
                forecast: this._getForecast(list, forecastLength),
                location: {
                    city: name,
                    country,
                },
            }));
    }

    convertWeather(forecast, scale) {
        return forecast.map(record => ({
            ...record,
            temp: scale === SCALE.FAHRENHEIT ? Math.round(record.temp * 1.8 + 32) : record.temp,
            feelsLike: scale === SCALE.FAHRENHEIT ? Math.round(record.feelsLike * 1.8 + 32) : record.feelsLike,
        }));
    }

    _getForecast(list, forecastLength) {
        return list.reduce(
            (acc, record) => {
                const date = new Date(record.dt_txt);

                if (date.getDate() === acc.lastDay || acc.forecast.length === forecastLength) {
                    return acc;
                }

                acc.forecast.push({
                    temp: Math.round(record.main.temp),
                    feelsLike: Math.round(record.main.feels_like),
                    humidity: record.main.humidity,
                    description: { id: record.weather[0].main, name: record.weather[0].description },
                    wind: Math.round(record.wind.speed),
                    date: record.dt_txt,
                });

                acc.lastDay = date.getDate();

                return acc;
            },
            { forecast: [], lastDay: null },
        ).forecast;
    }
}

export const weatherService = new WeatherService();
