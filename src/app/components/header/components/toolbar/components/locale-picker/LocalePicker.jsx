import React, { useState, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './LocalePicker.styles';
import { LocaleItem } from './components';
import { LOCALES } from './LocalePicker.models';
import { useClickOutside } from '../../../../../../common/click-outside';

// eslint-disable-next-line react/display-name
export const LocalePicker = React.memo(({ selectedLocale, onSelect: onSelectHandler }) => {
    const [isOpen, setDropdownState] = useState(false);
    const classes = useStyles(isOpen);
    const picker = useRef(null);

    useClickOutside(
        picker,
        useCallback(() => setDropdownState(false), [setDropdownState]),
    );

    const onSelect = useCallback(
        locale => {
            setDropdownState(false);
            onSelectHandler(locale);
        },
        [onSelectHandler],
    );

    return (
        <div ref={picker} className={classes.localePicker}>
            <div className={classes.dropdownButton} onClick={() => setDropdownState(!isOpen)}>
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
