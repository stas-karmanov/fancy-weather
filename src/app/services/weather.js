import { config } from '../config';

class WeatherService {
    constructor() {
        this.endpoint = 'https://api.openweathermap.org/data/2.5';
    }

    getWeatherInfo(region) {
        return fetch(`${this.endpoint}/forecast?q=${region}&lang=en&units=metric&APPID=${config.WEATHER_API_KEY}`)
            .then(res => res.json())
            .then(({ list, city: { name, country } }) => ({
                forecast: list.map(record => ({
                    temp: Math.round(record.main.temp),
                    feelsLike: Math.round(record.main.feels_like),
                    humidity: record.main.humidity,
                    description: { id: record.weather[0].main, name: record.weather[0].description },
                    wind: Math.round(record.wind.speed),
                })),
                city: {
                    name,
                    country,
                },
            }));
    }
}

export const weatherService = new WeatherService();
