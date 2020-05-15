import { setScale, setLocale } from '../components/header/store/Header.actions';
import { HEADER_STATE_KEY } from '../components/header/store/Header.reducer';

export const localStorageMiddleware = () => next => action => {
    if (action.type === setScale.type) {
        localStorage.setItem(HEADER_STATE_KEY.SCALE, action.payload);
    } else if (action.type === setLocale.type) {
        localStorage.setItem(HEADER_STATE_KEY.LOCALE, action.payload);
    }

    return next(action);
};
