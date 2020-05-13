import { config } from '../config';

class ImagesService {
    constructor() {
        this.endpoint = 'https://api.unsplash.com/photos';
    }

    getRandomImage() {
        return fetch(
            `${this.endpoint}/random?orientation=landscape&per_page=1&query=nature&client_id=${config.IMAGES_API_KEY}`,
        )
            .then(res => res.json())
            .then(
                ({ urls: { full } }) =>
                    new Promise(resolve => {
                        const image = new Image();
                        image.src = full;
                        image.onload = () => resolve(full);
                    }),
            );
    }
}

export const imagesService = new ImagesService();
