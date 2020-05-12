import { SCALE } from '../components/toolbar/components/scale-switcher/ScaleSwitcher.models';
import { setScale } from './Header.actions';

const DEFAULT_STATE = {
    scale: SCALE.CELCIUS,
};

export const headerReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case setScale.type:
            return { ...state, scale: action.payload };
        default:
            return state;
    }
};
