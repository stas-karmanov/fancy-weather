import { GeocodingService } from './geocoding';

jest.mock('../../config', () => ({ config: { GEOCODING_API_KEY: 'api_key' } }));

const mockResponse = {
    results: [{ geometry: { lat: 53.902334, lng: 27.5618791 } }],
};

describe('GeocodingService', () => {
    const originalFetch = window.fetch;
    const fetchStub = jest.fn();
    let geocodingService;

    beforeEach(() => {
        window.fetch = fetchStub.mockReturnValue(Promise.resolve({ json: () => Promise.resolve(mockResponse) }));
        geocodingService = new GeocodingService();
    });

    afterEach(() => {
        fetchStub.mockReset();
    });

    afterAll(() => {
        window.fetch = originalFetch;
    });

    describe('#getGeocodingInfo', () => {
        it('should make request', () => {
            geocodingService.getGeocodingInfo('city', new AbortController());
            expect(fetchStub).toBeCalledTimes(1);
        });

        it('should return correctly projected value', async () => {
            const response = await geocodingService.getGeocodingInfo('city', new AbortController());
            expect(response).toEqual({ lat: 53.902334, lng: 27.5618791 });
        });
    });
});
