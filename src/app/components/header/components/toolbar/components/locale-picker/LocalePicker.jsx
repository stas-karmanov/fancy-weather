import React, { useCallback, useRef, useReducer } from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './LocalePicker.styles';
import { LocaleItem } from './components';
import { LOCALES } from './LocalePicker.models';
import { useClickOutside } from '../../../../../../common/useClickOutside';

export const LocalePicker = React.memo(({ selectedLocale, onSelect: onSelectHandler }) => {
    const [isOpen, updateDropdownState] = useReducer((state, value) => (value == null ? !state : value), false);
    const classes = useStyles(isOpen);
    const picker = useRef(null);

    useClickOutside(
        picker,
        useCallback(() => updateDropdownState(false), [updateDropdownState]),
    );

    const onSelect = useCallback(
        locale => {
            updateDropdownState(false);
            onSelectHandler(locale);
        },
        [onSelectHandler],
    );

    const onDropdownClick = useCallback(() => updateDropdownState(), []);

    return (
        <div ref={picker} className={classes.localePicker}>
            <div className={classes.dropdownButton} onClick={onDropdownClick}>
                {selectedLocale}
            </div>
            {isOpen ? (
                <div className={classes.dropdownList}>
                    {LOCALES.map((locale, index, arr) => (
                        <LocaleItem
                            key={locale}
                            locale={locale}
                            isSelected={locale === selectedLocale}
                            isLast={arr.length - 1 === index}
                            onSelect={onSelect}
                        />
                    ))}
                </div>
            ) : null}
        </div>
    );
});

LocalePicker.propTypes = {
    selectedLocale: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
};
