import { enLocale } from '../../localization/en';
import { ruLocale } from '../../localization/ru';
import { beLocale } from '../../localization/be';

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
