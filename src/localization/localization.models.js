import { enLocale } from './en';
import { ruLocale } from './ru';
import { beLocale } from './be';

export const LOCALE = {
    EN: 'en',
    RU: 'ru',
    BE: 'be',
};

export const localization = {
    [LOCALE.EN]: enLocale,
    [LOCALE.RU]: ruLocale,
    [LOCALE.BE]: beLocale,
};
