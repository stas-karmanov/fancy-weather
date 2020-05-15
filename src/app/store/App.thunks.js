import { imagesService } from '../services';
import { setBackground } from './App.actions';
import { addError } from '../components/errors/store/Errors.actions';

export const loadBackground = () => dispatch => {
    imagesService
        .getRandomImage()
        .then(backgroundUrl => dispatch(setBackground(backgroundUrl)))
        .catch(() => dispatch(addError('Background image request failed!')));
};
