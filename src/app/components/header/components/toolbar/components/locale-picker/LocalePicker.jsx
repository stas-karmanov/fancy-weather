import React, { useState, useCallback, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './LocalePicker.styles';
import { LocaleItem } from './components';
import { LOCALES } from './LocalePicker.models';

// eslint-disable-next-line react/display-name
export const LocalePicker = React.memo(({ selectedLocale, onSelect: onSelectHandler }) => {
    const [isOpen, setDropdownState] = useState(false);
    const classes = useStyles(isOpen);
    const picker = useRef(null);

    const onOutsideClick = useCallback(event => {
        if (!picker.current.contains(event.target)) {
            setDropdownState(false);
        }
    }, []);

    useEffect(() => {
        document.addEventListener('click', onOutsideClick);
        return () => document.removeEventListener('click', onOutsideClick);
    }, [onOutsideClick]);

    const onSelect = useCallback(
        locale => {
            setDropdownState(false);
            onSelectHandler(locale);
        },
        [onSelectHandler],
    );

    let dropdownList = null;

    if (isOpen) {
        dropdownList = LOCALES.map((locale, index, arr) => (
            <LocaleItem
                key={locale}
                locale={locale}
                isSelected={locale === selectedLocale}
                isLast={arr.length - 1 === index}
                onSelect={onSelect}
            />
        ));
    }

    return (
        <div ref={picker} className={classes.localePicker}>
            <div className={classes.dropdownButton} onClick={() => setDropdownState(!isOpen)}>
                {selectedLocale}
            </div>
            <div className={classes.dropdownList}>{dropdownList}</div>
        </div>
    );
});

LocalePicker.propTypes = {
    selectedLocale: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
};
