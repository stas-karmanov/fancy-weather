import NatureImage from '../../assets/images/nature.jpg';
import { setBackground } from './App.actions';

export const backgroundReducer = (state = NatureImage, action) => {
    switch (action.type) {
        case setBackground.type:
            return action.payload;
        default:
            return state;
    }
};
