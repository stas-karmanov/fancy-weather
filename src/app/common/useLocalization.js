import { useSelector } from 'react-redux';

import { localeSelector } from '../components/header/store/Header.selectors';
import { localization } from '../../localization/localization.models';

export const useLocalization = () => {
    const locale = useSelector(localeSelector);
    return localization[locale];
};
