import { ImagesService } from './images';

jest.mock('../../config', () => ({ config: { IMAGES_API_KEY: 'api_key' } }));

const mockResponse = {
    urls: { full: 'image_url' },
};

describe('ImagesService', () => {
    const originalFetch = window.fetch;
    const fetchStub = jest.fn();

    const originalImage = window.Image;
    const imageSrcStub = jest.fn();
    const imageOnloadStub = jest.fn();

    let imagesService;

    beforeEach(() => {
        window.fetch = fetchStub.mockReturnValue(Promise.resolve({ json: () => Promise.resolve(mockResponse) }));
        window.Image = class {
            constructor() {
                const image = {};
                Object.defineProperties(image, {
                    src: {
                        set: imageSrcStub,
                    },
                    onload: {
                        set: fn => {
                            imageOnloadStub(fn);
                            fn();
                        },
                    },
                });
                return image;
            }
        };

        imagesService = new ImagesService();
    });

    afterEach(() => {
        fetchStub.mockReset();
        imageSrcStub.mockReset();
        imageOnloadStub.mockReset();
    });

    afterAll(() => {
        window.fetch = originalFetch;
        window.Image = originalImage;
    });

    describe('#getRandomImage', () => {
        it('should make request', () => {
            imagesService.getRandomImage();
            expect(fetchStub).toBeCalledTimes(1);
        });

        it('should return correctly projected value', async () => {
            const response = await imagesService.getRandomImage();
            expect(response).toBe(mockResponse.urls.full);
        });

        it('should be resolved after image is loaded', async () => {
            await imagesService.getRandomImage();
            expect(imageOnloadStub).toHaveBeenCalledTimes(1);
        });

        it('should set correct src to image', async () => {
            await imagesService.getRandomImage();
            expect(imageSrcStub).toHaveBeenCalledTimes(1);
            expect(imageSrcStub).toHaveBeenCalledWith(mockResponse.urls.full);
        });
    });
});
