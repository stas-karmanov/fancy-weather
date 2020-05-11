import { config } from '../config';

class WeatherService {
    constructor() {
        this.endpoint = 'https://api.openweathermap.org/data/2.5';
    }

    getWeatherInfo(region) {
        console.log(config);
        return fetch(
            `${this.endpoint}/forecast?q=${region}&lang=ua&units=metric&APPID=${config.WEATHER_API_KEY}`,
        ).then(res => res.json());
    }
}

export const weatherService = new WeatherService();
