import { imagesService } from '../services';
import { setBackground } from './App.actions';

export const loadBackground = () => dispatch => {
    imagesService.getRandomImage().then(backgroundUrl => dispatch(setBackground(backgroundUrl)));
};
