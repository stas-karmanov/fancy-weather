import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './LocaleItem.styles';

export const LocaleItem = React.memo(({ locale, isSelected, isLast = false, onSelect }) => {
    const classes = useStyles({ isLast, isSelected });

    return (
        <div className={classes.localeItem} onClick={() => onSelect(locale)}>
            {locale}
        </div>
    );
});

LocaleItem.propTypes = {
    locale: PropTypes.string.isRequired,
    isLast: PropTypes.bool,
    isSelected: PropTypes.bool.isRequired,
    onSelect: PropTypes.func.isRequired,
};
