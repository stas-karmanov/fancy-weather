import { config } from '../../config';

export class GeolocationService {
    constructor() {
        this.endpoint = 'https://ipinfo.io';
    }

    getGeolocationInfo() {
        return fetch(`${this.endpoint}/json?token=${config.GEOLOCATION_API_KEY}`)
            .then(res => res.json())
            .then(({ city, country }) => ({ city, country }));
    }
}
