import { config } from '../config';

class WeatherService {
    constructor() {
        this.endpoint = 'https://api.openweathermap.org/data/2.5';
    }

    getWeatherInfo(region, forecastLength) {
        return fetch(`${this.endpoint}/forecast?q=${region}&lang=en&units=metric&APPID=${config.WEATHER_API_KEY}`)
            .then(res => res.json())
            .then(({ list, city: { name, country } }) => ({
                forecast: this._getForecast(list, forecastLength),
                city: {
                    name,
                    country,
                },
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
