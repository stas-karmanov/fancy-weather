import { config } from '../config';

class GeocodingService {
    constructor() {
        this.endpoint = 'https://api.opencagedata.com/geocode/v1';
    }

    getGeocodingInfo(city, abortController) {
        const searchParams = new URLSearchParams([
            ['q', city],
            ['key', config.GEOCODING_API_KEY],
            ['pretty', 1],
            ['no_annotations', 1],
        ]);

        return fetch(`${this.endpoint}/json?${searchParams}`, { signal: abortController.signal })
            .then(res => res.json())
            .then(({ results }) => results[0].geometry);
    }
}

export const geocodingService = new GeocodingService();
