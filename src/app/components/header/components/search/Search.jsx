import React, { useRef, useContext, useCallback } from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './Search.styles';
import { LocaleContext } from '../../../../localizator/Localizator';

// eslint-disable-next-line react/display-name
export const Search = React.memo(({ onSearch }) => {
    const classes = useStyles();
    const localization = useContext(LocaleContext);
    const input = useRef(null);

    const handleSearch = useCallback(() => {
        const value = input.current.value;

        if (!value) {
            return;
        }

        input.current.value = '';
        onSearch(value);
    }, [onSearch]);

    return (
        <div className={classes.search}>
            <input
                ref={input}
                className={classes.input}
                type="text"
                placeholder={localization.searchCity}
                onKeyUp={({ keyCode }) => {
                    if (keyCode === 13) {
                        handleSearch();
                    }
                }}
            />
            <button className={classes.button} onClick={handleSearch}>
                {localization.search}
            </button>
        </div>
    );
});

Search.propTypes = {
    onSearch: PropTypes.func.isRequired,
};
