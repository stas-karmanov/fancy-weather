import { WeatherService } from './weather';
import { weatherMockResponse, expectedProjectedValue, convertedTemperatures } from './weather.mocks';
import { SCALE } from '../../components/header/components/toolbar/components/scale-switcher/ScaleSwitcher.models';
import { LOCALE } from '../../../localization/localization.models';

jest.mock('../../config', () => ({ config: { WEATHER_API_KEY: 'api_key' } }));

describe('WeatherService', () => {
    const originalFetch = window.fetch;
    const fetchStub = jest.fn();
    let weatherService;

    beforeEach(() => {
        window.fetch = fetchStub.mockReturnValue(Promise.resolve({ json: () => Promise.resolve(weatherMockResponse) }));
        weatherService = new WeatherService();
    });

    afterEach(() => {
        fetchStub.mockReset();
    });

    afterAll(() => {
        window.fetch = originalFetch;
    });

    describe('#getWeatherInfo', () => {
        it('should make request', () => {
            weatherService.getWeatherInfo({
                region: 'city',
                forecastLength: 1,
                abortController: new AbortController(),
                locale: 'en',
            });
            expect(fetchStub).toBeCalledTimes(1);
        });

        it('should return correctly projected value', async () => {
            const responseForOneDay = await weatherService.getWeatherInfo({
                region: 'Minsk',
                forecastLength: 1,
                abortController: new AbortController(),
                locale: LOCALE.EN,
            });

            const responseForThreeDays = await weatherService.getWeatherInfo({
                region: 'Minsk',
                forecastLength: 3,
                abortController: new AbortController(),
                locale: LOCALE.EN,
            });

            expect(responseForOneDay).toEqual({
                ...expectedProjectedValue,
                forecast: expectedProjectedValue.forecast.slice(0, 1),
            });
            expect(responseForThreeDays).toEqual({
                ...expectedProjectedValue,
                forecast: expectedProjectedValue.forecast.slice(0, 3),
            });
        });
    });

    describe('#convertWeather', () => {
        it('should correctly convert from Celsius to Fahrenheit', () => {
            const convertedWeather = weatherService
                .convertWeather(expectedProjectedValue.forecast, SCALE.FAHRENHEIT)
                .map(({ temp, feelsLike }) => ({
                    temp,
                    feelsLike,
                }));

            expect(convertedWeather).toEqual(convertedTemperatures);
        });
    });
});
