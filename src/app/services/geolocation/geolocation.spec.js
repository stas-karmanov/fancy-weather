import { GeolocationService } from './geolocation';

jest.mock('../../config', () => ({ config: { GEOLOCATION_API_KEY: 'api_key' } }));

const mockResponse = {
    city: 'Minsk',
    country: 'BY',
};

describe('GeolocationService', () => {
    const originalFetch = window.fetch;
    const fetchStub = jest.fn();
    let geolocationService;

    beforeEach(() => {
        window.fetch = fetchStub.mockReturnValue(Promise.resolve({ json: () => Promise.resolve(mockResponse) }));
        geolocationService = new GeolocationService();
    });

    afterEach(() => {
        fetchStub.mockReset();
    });

    afterAll(() => {
        window.fetch = originalFetch;
    });

    describe('#getGeolocationInfo', () => {
        it('should make request', () => {
            geolocationService.getGeolocationInfo();
            expect(fetchStub).toBeCalledTimes(1);
        });

        it('should return correctly projected value', async () => {
            const response = await geolocationService.getGeolocationInfo();
            expect(response).toEqual({ city: 'Minsk', country: 'BY' });
        });
    });
});
