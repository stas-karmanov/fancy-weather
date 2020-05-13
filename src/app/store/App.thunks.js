import { imagesService } from '../services/images';
import { setBackground } from './App.actions';

export const loadBackground = () => dispatch => {
    imagesService.getRandomImage().then(backgroundUrl => dispatch(setBackground(backgroundUrl)));
};
