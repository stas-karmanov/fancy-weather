import { SCALE } from '../components/toolbar/components/scale-switcher/ScaleSwitcher.models';
import { setScale, setLocale } from './Header.actions';
import { LOCALE } from '../../../../localization/localization.models';

export const HEADER_STATE_KEY = {
    LOCALE: 'locale',
    SCALE: 'scale',
};

const DEFAULT_STATE = {
    scale: localStorage.getItem(HEADER_STATE_KEY.SCALE) || SCALE.CELCIUS,
    locale: localStorage.getItem(HEADER_STATE_KEY.LOCALE) || LOCALE.EN,
};

export const headerReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case setScale.type:
            return { ...state, scale: action.payload };
        case setLocale.type:
            return { ...state, locale: action.payload };
        default:
            return state;
    }
};
