import { SCALE } from '../components/toolbar/components/scale-switcher/ScaleSwitcher.models';
import { setScale, setLocale } from './Header.actions';
import { LOCALE } from '../components/toolbar/components/locale-picker/LocalePicker.models';

const DEFAULT_STATE = {
    scale: SCALE.CELCIUS,
    locale: LOCALE.EN,
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
