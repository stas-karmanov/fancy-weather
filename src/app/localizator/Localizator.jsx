import React from 'react';
import { useSelector } from 'react-redux';

import { localeSelector } from '../components/header/store/Header.selectors';
import { localization } from './Localizator.models';

export const LocaleContext = React.createContext();

export const Localizator = ({ children }) => {
    const locale = useSelector(localeSelector);

    return <LocaleContext.Provider value={localization[locale]}>{children}</LocaleContext.Provider>;
};
